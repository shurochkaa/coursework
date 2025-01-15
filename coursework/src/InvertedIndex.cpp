#include "../include/InvertedIndex.h"
#include <filesystem>
#include <fstream>
#include <sstream>
#include <algorithm>
#include <unordered_set>

namespace fs = std::filesystem;

void InvertedIndex::load(const std::string& directory) {
    for (const auto& entry : fs::directory_iterator(directory))
    {
        if (entry.path().extension() == ".txt")
        {
            std::string docID = entry.path().stem().string();
            std::string content = read(entry.path().string());
            if (!content.empty())
            {
                add(docID, content, false);
            }
        }
    }
}

void InvertedIndex::add(const std::string& docID, const std::string& content, bool saveToFile) {
    std::lock_guard<std::mutex> lock(indexMutex);
    std::string cleanedContent = clean(content);

    std::unordered_set<std::string> uniqueWords;
    std::istringstream stream(cleanedContent);
    std::string word;

    while (stream >> word)
    {
        if (uniqueWords.insert(word).second)
        {
            if (std::find(index[word].begin(), index[word].end(), docID) == index[word].end())
            {
                index[word].push_back(docID);
            }
        }
    }

    if (saveToFile)
    {
        std::ofstream outFile("documents/" + docID + ".txt");
        if (outFile.is_open())
        {
            outFile << content;
        }
    }
}

void InvertedIndex::remove(const std::string& docID) {
    std::lock_guard<std::mutex> lock(indexMutex);
    for (auto& [word, docs] : index)
    {
        docs.erase(std::remove(docs.begin(), docs.end(), docID), docs.end());
    }
    fs::remove("documents/" + docID + ".txt");
}

std::vector<std::string> InvertedIndex::search(const std::string& term) {
    std::lock_guard<std::mutex> lock(indexMutex);
    std::string cleanedTerm = clean(term);
    return index.count(cleanedTerm) ? index[cleanedTerm] : std::vector<std::string>{};
}

std::string InvertedIndex::clean(const std::string& content) {
    std::string cleanedContent;
    for (char c : content) {
        if (isalnum(c) || isspace(c))
        {
            cleanedContent.push_back(std::tolower(c));
        }
    }
    return cleanedContent;
}

std::string InvertedIndex::read(const std::string& filePath) {
    std::ifstream inFile(filePath);
    if (!inFile.is_open())
    {
        return "";
    }
    std::stringstream buffer;
    buffer << inFile.rdbuf();
    return buffer.str();
}
