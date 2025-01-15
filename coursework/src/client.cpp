#include <iostream>
#include <string>
#include <winsock2.h>
#include <windows.h>
#include <cstdlib>

#pragma comment(lib, "ws2_32.lib")

void initWinSock() {
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
    {
        std::cerr << "WSAStartup failed: " << WSAGetLastError() << std::endl;
        exit(EXIT_FAILURE);
    }
}

SOCKET createSocket(const std::string& serverIP, int port) {
    SOCKET clientSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (clientSocket == INVALID_SOCKET)
    {
        std::cerr << "Socket creation failed: " << WSAGetLastError() << std::endl;
        WSACleanup();

        exit(EXIT_FAILURE);
    }

    sockaddr_in serverAddr{};
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(port);
    serverAddr.sin_addr.s_addr = inet_addr(serverIP.c_str());

    if (connect(clientSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR)
    {
        std::cerr << "Connection failed: " << WSAGetLastError() << std::endl;
        closesocket(clientSocket);
        WSACleanup();

        exit(EXIT_FAILURE);
    }

    return clientSocket;
}

void sendRequest(SOCKET clientSocket, const std::string& request) {
    if (send(clientSocket, request.c_str(), request.size(), 0) == SOCKET_ERROR)
    {
        std::cerr << "Send failed: " << WSAGetLastError() << std::endl;
        closesocket(clientSocket);
        WSACleanup();

        exit(EXIT_FAILURE);
    }
}

std::string receiveResponse(SOCKET clientSocket) {
    char buffer[2048] = {0};
    int bytesReceived = recv(clientSocket, buffer, sizeof(buffer), 0);
    if (bytesReceived == SOCKET_ERROR)
    {
        std::cerr << "Receive failed: " << WSAGetLastError() << std::endl;
        closesocket(clientSocket);
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    return std::string(buffer, bytesReceived);
}

void showMenu() {
    std::cout << "1) Додати документ\n";
    std::cout << "2) Знайти\n";
    std::cout << "3) Видалити документ\n";
    std::cout << "4) Переглянути документи\n";
    std::cout << "5) Завершити роботу\n";
    std::cout << "Ваш вибір: ";
}

void handleUserInput(const std::string& serverIP, int port) {
    while (true)
    {
        SOCKET clientSocket = createSocket(serverIP, port);

        showMenu();

        int choice;
        std::cin >> choice;
        std::cin.ignore();

        std::string request, docID, content, response;

        switch (choice)
        {
            case 1:
                std::cout << "Введіть ID: ";
                std::getline(std::cin, docID);
                std::cout << "Введіть вміст: ";
                std::getline(std::cin, content);
                request = "POST / HTTP/1.1\r\n\r\nADD " + docID + " " + content;
                break;
            case 2:
                std::cout << "Введіть пошуковий запит: ";
                std::getline(std::cin, content);
                request = "POST / HTTP/1.1\r\n\r\nSEARCH " + content;
                break;
            case 3:
                std::cout << "Введіть ID: ";
                std::getline(std::cin, docID);
                request = "POST / HTTP/1.1\r\n\r\nDELETE " + docID;
                break;
            case 4:
                request = "POST / HTTP/1.1\r\n\r\nLIST";
                break;
            case 5:
                closesocket(clientSocket);
                WSACleanup();
                return;
            default:
                std::cout << "Помилка\n";
                closesocket(clientSocket);
                continue;
        }

        sendRequest(clientSocket, request);
        response = receiveResponse(clientSocket);
        std::cout << "\nВідповідь серверу:\n" << response << std::endl;

        closesocket(clientSocket);
    }
}

int main() {
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);

    initWinSock();

    const std::string serverIP = "127.0.0.1";
    const int port = 8080;

    handleUserInput(serverIP, port);

    WSACleanup();
    return 0;
}
