#ifndef INVERTEDINDEX_H
#define INVERTEDINDEX_H

#include <string>
#include <vector>
#include <unordered_map>
#include <mutex>

class InvertedIndex {
public:
    void load(const std::string& directory);
    void add(const std::string& docID, const std::string& content, bool saveToFile = true);
    void remove(const std::string& docID);
    std::vector<std::string> search(const std::string& term);

private:
    std::unordered_map<std::string, std::vector<std::string>> index;
    std::mutex indexMutex;

    static std::string clean(const std::string& content);
    static std::string read(const std::string& filePath);
};

#endif
