# Bug Reports

## 1) bug1_fixed.py
**File name**: bug1_fixed.py  
**Bug summary**: CLI argument parser crashed at startup due to syntax errors.  
**Root cause**: Missing colon in function/loop definitions and an unclosed parenthesis prevented Python from parsing the file.  
**Resolution (AI suggestion + manual edits)**: AI proposed adding the missing `:` and fixing parentheses, plus guarding index access for `--limit`. Manually refactored into a small, robust parser using a `while` loop, explicit type conversion, and clear error messages.  
**Lessons learned**: Linting and running the file once would have surfaced syntax errors early; always validate expected argument arity and types.

---

## 2) bug2_fixed.js
**File name**: bug2_fixed.js  
**Bug summary**: Weighted average returned incorrect results.  
**Root cause**: Computation used `sum(weights)/values.length` instead of `sum(values[i]*weights[i]) / sum(weights)`. No guard for zero weight sum.  
**Resolution (AI suggestion + manual edits)**: AI recommended the correct formula and a zero‑division guard. Implemented `reduce` for numerator/denominator and returned `NaN` when the total weight is zero.  
**Lessons learned**: Write a quick property‑based or table‑driven test for known pairs to catch logic slips; always handle edge cases like empty arrays or zero weights.

---

## 3) bug3_fixed.java
**File name**: bug3_fixed.java  
**Bug summary**: Normalization step (`trim().toUpperCase`) threw `NullPointerException`.  
**Root cause**: Code did not handle `null` entries in the list.  
**Resolution (AI suggestion + manual edits)**: AI suggested a null check or filtering; implemented a null‑safe helper returning `Optional<String>` and printed only present values.  
**Lessons learned**: Treat external data as nullable; prefer defensive normalization or use streams/Optionals to encode absence explicitly.

---

## 4) bug4_fixed.cpp
**File name**: bug4_fixed.cpp  
**Bug summary**: Program accessed past the end of the array/vector.  
**Root cause**: Off‑by‑one loop condition `i <= size()` led to `v[size()]` access (out of bounds, UB).  
**Resolution (AI suggestion + manual edits)**: AI recommended `i < size()` or high‑level iteration; replaced manual loop with `std::accumulate` for safety and clarity.  
**Lessons learned**: Prefer STL algorithms and range‑based loops to avoid index math errors; compile with sanitizers in debug builds.

---

## 5) bug5_fixed.py
**File name**: bug5_fixed.py  
**Bug summary**: Data cleaning and aggregation failed with type errors and wrong indexing.  
**Root cause**: `to_numeric(..., errors="ignore")` left non‑numeric values as strings; chained assignment triggered `SettingWithCopy`; used `iloc` with labels; aggregated a non‑existent column.  
**Resolution (AI suggestion + manual edits)**: AI suggested coercing to numeric with `errors="coerce"`, avoiding chained assignment via `loc`, fixing March using label selection, and aggregating the correct `revenue` column. Implemented all changes and verified output.  
**Lessons learned**: Convert dtypes early, avoid chained assignment, use `loc`/`iloc` correctly, and assert schema before groupby.

---

## 6) bug6_fixed.js
**File name**: bug6_fixed.js  
**Bug summary**: Asynchronous downloads reported success before file writes completed; errors were swallowed.  
**Root cause**: Used `urls.map(async ...)` without awaiting the resulting Promises; no `Promise.all` synchronization.  
**Resolution (AI suggestion + manual edits)**: AI advised collecting Promises and awaiting `Promise.all`. Implemented `Promise.all` around the map and returned resolved data, ensuring errors propagate.  
**Lessons learned**: Always synchronize async work sets with `Promise.all`/`allSettled`; test with failing URLs and assert ordering/propagation.
