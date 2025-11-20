#include <iostream>
#include <vector>
#include <numeric>

long sum(const std::vector<int>& v) {
    // why: std::accumulate avoids manual index errors
    return std::accumulate(v.begin(), v.end(), 0L);
}

int main() {
    std::vector<int> data{1, 2, 3, 4, 5};
    std::cout << "sum = " << sum(data) << std::endl; // 15
    return 0;
}