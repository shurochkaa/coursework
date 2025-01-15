#include "../include/WebServer.h"

int main() {
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);

//    HWND hWnd = GetConsoleWindow();
//    ShowWindow(hWnd, SW_HIDE);

    WebServer server(8080, 4);
    server.start();
    return 0;
}
