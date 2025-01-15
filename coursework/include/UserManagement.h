#ifndef USERMANAGEMENT_H
#define USERMANAGEMENT_H

#include <winsock2.h>
#include "InvertedIndex.h"
#include <string>

class UserManagement {
public:
    UserManagement(SOCKET clientSocket, InvertedIndex& index);
    void handleClient();

private:
    SOCKET clientSocket;
    InvertedIndex& index;

    std::string processRequest(const std::string& request);
    std::string handleList();
    std::string handleAdd(const std::string& body);
    std::string handleDelete(const std::string& body);
    std::string handleSearch(const std::string& body);
    std::string sendWeb(const std::string& filePath, const std::string& contentType);
    std::string createResponse(int statusCode, const std::string& contentType, const std::string& content);
    void cleanup(std::string& body);
};

#endif
