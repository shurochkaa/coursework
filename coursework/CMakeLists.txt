cmake_minimum_required(VERSION 3.26)
project(coursework)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_EXE_LINKER_FLAGS "-static")

# Сервер
add_executable(coursework
        src/server.cpp
        src/WebServer.cpp
        src/UserManagement.cpp
        src/InvertedIndex.cpp
        resources.rc
)

target_link_libraries(coursework ws2_32)

# Клієнт
add_executable(console_client
        src/client.cpp
        client_resources.rc
)

target_link_libraries(console_client ws2_32)
