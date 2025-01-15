#include "../include/WebServer.h"
#include "../include/UserManagement.h"
#include <iostream>
#include <atomic>

std::atomic<bool> running{true};
std::thread updateThread;

WebServer::WebServer(int port, size_t threadCount)
        : port(port), threadPool(threadCount), serverSocket(INVALID_SOCKET) {
    // завантаджуємо документи з папки у індекс до старту сервера
    index.load("documents");
}

// Деструктор серверу
WebServer::~WebServer() {
    running = false;
    if (updateThread.joinable())
    {
        updateThread.join();
    }

    if (serverSocket != INVALID_SOCKET)
    {
        closesocket(serverSocket);
    }
    WSACleanup();
}

void WebServer::start() {
    // оновлення індексу
    updateThread = std::thread([this]() {
        while (running)
        {
            std::this_thread::sleep_for(std::chrono::minutes(1));
            index.load("documents");
            std::cout << "Індекс оновлено.\n";
        }
    });

    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
    {
        std::cerr << "WSAStartup failed with error: " << WSAGetLastError() << "\n";
        return;
    }

    serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket == INVALID_SOCKET)
    {
        std::cerr << "Socket creation failed with error: " << WSAGetLastError() << "\n";
        WSACleanup();
        return;
    }

    sockaddr_in address = {};
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(port);

    if (bind(serverSocket, (sockaddr*)&address, sizeof(address)) == SOCKET_ERROR)
    {
        std::cerr << "Bind failed with error: " << WSAGetLastError() << "\n";
        closesocket(serverSocket);
        WSACleanup();
        return;
    }

    if (listen(serverSocket, 10) == SOCKET_ERROR)
    {
        std::cerr << "Listen failed with error: " << WSAGetLastError() << "\n";
        closesocket(serverSocket);
        WSACleanup();
        return;
    }

    std::cout << "Server is running on port " << port << "...\n";

    while (true)
    {
        SOCKET clientSocket = accept(serverSocket, nullptr, nullptr);
        if (clientSocket == INVALID_SOCKET)
        {
            std::cerr << "Accept failed with error: " << WSAGetLastError() << "\n";
            continue;
        }

        threadPool.enqueue([this, clientSocket]() {
            connection(clientSocket);
        });
    }
}

void WebServer::connection(SOCKET clientSocket) {
    // Обробка запитів
    UserManagement handler(clientSocket, index);
    handler.handleClient();

    closesocket(clientSocket);
}
