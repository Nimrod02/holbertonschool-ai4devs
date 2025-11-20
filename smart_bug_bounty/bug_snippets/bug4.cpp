#include <iostream>
#include <vector>

long sum(const std::vector<int>& v) {
    long s = 0;
    // BUG: i <= v.size() lit v[v.size()] hors bornes
    for (size_t i = 0; i <= v.size(); ++i) {
        s += v[i];
    }
    return s;
}

int main() {
    std::vector<int> data{1,2,3,4,5};
    std::cout << "sum = " << sum(data) << std::endl; // comportement indéfini
    return 0;
}