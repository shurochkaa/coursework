#ifndef WEBSERVER_H
#define WEBSERVER_H

#include <winsock2.h>
#include "InvertedIndex.h"
#include "ThreadPool.h"

class WebServer {
public:
    WebServer(int port, size_t threadCount);
    ~WebServer();
    void start();

private:
    int port;
    ThreadPool threadPool;
    SOCKET serverSocket;
    WSADATA wsaData{};
    InvertedIndex index;

    void connection(SOCKET clientSocket);
};

#endif
