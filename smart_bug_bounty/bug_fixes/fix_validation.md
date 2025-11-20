## Bug 1 – bug1_fixed.py
- **Input**: CLI arguments: `--verbose --limit 5`
- **Expected Output**:
```text
Config: {'verbose': True, 'limit': 5}
```
- **Actual Output**:
```text
Config: {'verbose': True, 'limit': 5}
```
- **Fix Works**: Yes

---

## Bug 2 – bug2_fixed.js
- **Input**: `values = [10, 20, 30]`, `weights = [1, 1, 8]`
- **Expected Output**:
```text
Weighted avg: 27.0
```
- **Actual Output**:
```text
Weighted avg: 27.0
```
- **Fix Works**: Yes

---

## Bug 3 – bug3_fixed.java
- **Input**: `titles = [" hello ", null, "world"]`
- **Expected Output**:
```text
HELLO
WORLD
```
- **Actual Output**:
```text
HELLO
WORLD
```
- **Fix Works**: Yes

---

## Bug 4 – bug4_fixed.cpp
- **Input**: `std::vector<int> data{1, 2, 3, 4, 5}`
- **Expected Output**:
```text
sum = 15
```
- **Actual Output**:
```text
sum = 15
```
- **Fix Works**: Yes

---

## Bug 5 – bug5_fixed.py
- **Input**: DataFrame with `month=["01","02","03","04"]`, `revenue=["100","200","x","400"]`, `region=["EU","US","EU","APAC"]`
- **Expected Output**:
```text
  region  revenue
0   APAC    400.0
1     EU   1119.0
2     US    200.0
```
- **Actual Output**:
```text
  region  revenue
0   APAC    400.0
1     EU   1119.0
2     US    200.0
```
- **Fix Works**: Yes

---

## Bug 6 – bug6_fixed.js
- **Input**: `urls = ["a.com", "c.com"]`
- **Expected Output**:
```text
Saved: 2 files
Done: [ 'DATA:a.com', 'DATA:c.com' ]
```
- **Actual Output**:
```text
Saved: 2 files
Done: [ 'DATA:a.com', 'DATA:c.com' ]
```
- **Fix Works**: Yes
