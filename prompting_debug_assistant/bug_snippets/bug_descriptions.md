## Bug 1 — bug1.py
- Intended Behavior: Sum all integers in a list and print the total (e.g., "Sum: 15").  
- Issue Type: Syntax error (prevents execution).  
- Reproduction: run `python bug1.py` → SyntaxError at the `for` line.  
- Root Cause: Missing colon after `for n in numbers`.  
- Proposed Fix: Add the colon (`for n in numbers:`) or replace loop with `total = sum(numbers)`.  
- Minimal Tests: Run script; assert stdout contains `Sum: 15`.  
- Severity: Blocking — script does not run.

---

## Bug 2 — bug2.js
- Intended Behavior: Return true when input number is even, false otherwise.  
- Issue Type: Logical error.  
- Reproduction: import function and call with `2` → returns `false`.  
- Root Cause: Condition uses parity check for odd (`% 2 == 1`) instead of even.  
- Proposed Fix: Use `num % 2 === 0` (and validate argument is integer).  
- Minimal Tests: Unit tests for `-2, 0, 1, 2, 3` expecting `true, true, false, true, false`.  
- Severity: Medium — incorrect behavior but no crash.

---

## Bug 3 — bug3.java
- Intended Behavior: Print the third element of an integer array when present.  
- Issue Type: Runtime exception (ArrayIndexOutOfBoundsException).  
- Reproduction: `javac bug3.java && java Bug3` with current array length 2 → exception.  
- Root Cause: Code unconditionally accesses `nums[2]` while array length is 2.  
- Proposed Fix: Guard access (`if (nums.length > 2)`) or ensure array contains >= 3 elements.  
- Minimal Tests: Run with arrays of length 2 (expect graceful message) and 3 (expect correct value).  
- Severity: High — crash at runtime.

---

## Bug 4 — bug4.cpp
- Intended Behavior: Print every element of an integer array exactly once.  
- Issue Type: Off-by-one array bounds error (undefined behavior / potential crash).  
- Reproduction: compile & run with small arrays → may segfault or print garbage.  
- Root Cause: Loop uses `i <= size` instead of `i < size`.  
- Proposed Fix: Change loop to `for (int i = 0; i < size; i++)`. Validate `size` type and non-negative.  
- Minimal Tests: Arrays of size 0, 1, and >1; verify no out-of-bounds access.  
- Severity: High — memory-safety risk.

---

## Bug 5 — bug5.py
- Intended Behavior: Compute and print the average of numeric grades.  
- Issue Type: Type error (string elements cause TypeError on sum).  
- Reproduction: `python bug5.py` → TypeError: unsupported operand type(s).  
- Root Cause: Grades are strings (`["90","80","70"]`) but `sum()` expects numbers.  
- Proposed Fix: Convert elements before summing: `total = sum(map(int, grades))` and handle empty list.  
- Minimal Tests: Verify average for `["90","80","70"]` → 80.0; test with empty list (avoid ZeroDivisionError).  
- Severity: Medium — runtime error, easy to fix.

---

## Bug 6 — bug6.js
- Intended Behavior: Read a file asynchronously and print its contents or handle read errors.  
- Issue Type: API misuse (incorrect callback argument order / error handling).  
- Reproduction: run snippet with missing file → code mishandles error as data.  
- Root Cause: Callback signature reversed or logic misinterprets parameters (should be `(err, data)`).  
- Proposed Fix: Use Node callback pattern `(err, data) => { if (err) { handle } else { use data } }`. Add tests for missing and present files.  
- Minimal Tests: Read existing file (expect contents) and missing file (expect handled error, non-zero exit or logged error).  
- Severity: Medium — errors can be silently ignored or misreported.
