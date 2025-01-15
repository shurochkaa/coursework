#include "../include/UserManagement.h"
#include <fstream>
#include <sstream>
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

// ініціалізація сокету користувача та об'єкту індексу
UserManagement::UserManagement(SOCKET clientSocket, InvertedIndex& index)
        : clientSocket(clientSocket), index(index) {}

// Обробка запитів
void UserManagement::handleClient() {
    char buffer[2048] = {0};
    int bytesReceived = recv(clientSocket, buffer, sizeof(buffer), 0);

    if (bytesReceived <= 0)
    {
        closesocket(clientSocket);
        return;
    }

    // Створення відповіді
    std::string request(buffer, bytesReceived);
    std::string response = processRequest(request);
    send(clientSocket, response.c_str(), response.size(), 0);

    closesocket(clientSocket);
}

// Обробка запиту користувача
std::string UserManagement::processRequest(const std::string& request) {
    if (request.starts_with("GET / ") || request.starts_with("GET /index.html"))
    {
        return sendWeb("static/index.html", "text/html");
    }
    else if (request.starts_with("GET /style.css"))
    {
        return sendWeb("static/style.css", "text/css");
    }
    else if (request.starts_with("GET /script.js"))
    {
        return sendWeb("static/script.js", "application/javascript");
    }
    else if (request.starts_with("POST /"))
    {
        size_t pos = request.find("\r\n\r\n");
        if (pos != std::string::npos)
        {
            std::string body = request.substr(pos + 4);
            cleanup(body);

            if (body.starts_with("ADD"))
            {
                return handleAdd(body);
            }
            else if (body.starts_with("DELETE"))
            {
                return handleDelete(body);
            }
            else if (body.starts_with("SEARCH"))
            {
                return handleSearch(body);
            }
            else if (body.starts_with("LIST"))
            {
                return handleList();
            }
            else
            {
                return createResponse(400, "text/plain", "Bad Request\n");
            }
        }
        else
        {
            return createResponse(400, "text/plain", "Bad Request\n");
        }
    }
    else
    {
        return createResponse(400, "text/plain", "Bad Request\n");
    }
}

// Формування списку документів
std::string UserManagement::handleList() {
    std::stringstream ss;
    for (const auto& entry : fs::directory_iterator("documents")) {
        ss << entry.path().stem().string() << "\n";
    }
    return createResponse(200, "text/plain", ss.str());
}

void UserManagement::cleanup(std::string& body) {
    while (!body.empty() && (body.back() == '\r' || body.back() == '\n'))
    {
        body.pop_back();
    }
}

// Відправка статичного файлу
std::string UserManagement::sendWeb(const std::string& filePath, const std::string& contentType) {
    std::ifstream file(filePath);

    if (file.is_open())
    {
        std::stringstream ss;
        ss << file.rdbuf();
        return createResponse(200, contentType, ss.str());
    }
    else
    {
        return createResponse(404, contentType, "Файл не знайдено\n");
    }
}

// Видалення документа за ID
std::string UserManagement::handleDelete(const std::string& body) {
    std::string docID = body.substr(7);
    docID.erase(0, docID.find_first_not_of(' '));

    index.remove(docID);

    return createResponse(200, "text/plain", "Документ успішно видалено.\n");
}

// Пошук документів
std::string UserManagement::handleSearch(const std::string& body) {
    std::string term = body.substr(6);
    term.erase(0, term.find_first_not_of(' '));

    auto results = index.search(term);

    if (results.empty())
    {
        return createResponse(200, "text/plain", "Не знайдено.\n");
    }

    std::ostringstream ss;
    for (const auto& docID : results)
    {
        ss << docID << "\n";
    }
    return createResponse(200, "text/plain", ss.str());
}


// Додавання нового документа
std::string UserManagement::handleAdd(const std::string& body) {
    size_t space1 = body.find(' ');
    size_t space2 = body.find(' ', space1 + 1);

    if (space1 != std::string::npos && space2 != std::string::npos)
    {
        std::string docID = body.substr(space1 + 1, space2 - space1 - 1);
        std::string docContent = body.substr(space2 + 1);
        index.add(docID, docContent);

        return createResponse(200, "text/plain", "Документ успішно додано.\n");
    }
    return createResponse(400, "text/plain", "Bad Request\n");
}

// Формування HTTP-відповіді
std::string UserManagement::createResponse(int statusCode, const std::string& contentType, const std::string& content) {
    return "HTTP/1.1 " + std::to_string(statusCode) + " OK\r\n" +
           "Content-Type: " + contentType + "\r\n" +
           "Content-Length: " + std::to_string(content.size()) + "\r\n\r\n" +
           content;
}
