## Bug 1 – bug1.py
**Intended Behavior**: Sum all integers in the list `numbers` and print a single line "Sum: <total>" (for the shipped sample [1,2,3,4,5] the output must be "Sum: 15").  
**Issue Type**: Syntax error — missing loop token (colon).  
**Notes**: Reproduces immediately with `python bug1.py`. The missing colon prevents parsing, so no runtime behavior occurs. Fix by adding the colon (`for n in numbers:`) or replacing the loop with `total = sum(numbers)`. Add a unit-like check that runs the script and asserts stdout exactly equals "Sum: 15" to catch regressions.

---

## Bug 2 – bug2.js
**Intended Behavior**: Export a function `isEven(n)` that returns `true` for even integers and `false` for odd integers; document behavior for non-integers (e.g., coerce or reject).  
**Issue Type**: Logical error — incorrect parity condition (checks odd instead of even).  
**Notes**: Fails functional contract (returns wrong boolean for all callers). Reproduce by calling `isEven(2)` which returns `false`. Fix by using `n % 2 === 0` and add input validation (`Number.isInteger`). Add tests for negative numbers, zero and non-integers to avoid ambiguity.

---

## Bug 3 – bug3.java
**Intended Behavior**: Print the third element (index 2) of the `nums` array only when the array contains at least three elements; otherwise print a clear, user-friendly message.  
**Issue Type**: Runtime error — ArrayIndexOutOfBounds (unchecked index access).  
**Notes**: With `int[] nums = {10,20}` the program throws and terminates. Fix by guarding access (`if (nums.length > 2)`) or validating inputs at program start. Add tests: one confirming graceful message for length<3 and one asserting correct printed value for length>=3.

---

## Bug 4 – bug4.cpp
**Intended Behavior**: Iterate over an integer array and print each element once (indices 0..size-1).  
**Issue Type**: Off-by-one / bounds error — loop condition `<= size` accesses one element past valid range.  
**Notes**: Causes undefined behavior or crash for small arrays. Fix by using `i < size` and ensure `size` is validated (non-negative, matches array length type). Add tests for size=0, size=1 and larger sizes to detect bounds regressions.

---

## Bug 5 – bug5.py
**Intended Behavior**: Parse numeric grades, compute their numeric average, and print it (for `["90","80","70"]` produce `80.0`).  
**Issue Type**: Type error / data-validation omission — grades are strings but code calls `sum()` directly.  
**Notes**: Reproduces as `TypeError: unsupported operand type(s)` at `sum(grades)`. Fix by converting values (`nums = list(map(int, grades))`) and handle empty lists to avoid ZeroDivisionError. Add tests for valid string-numbers, floats, malformed entries (should raise informative error or skip).

---

## Bug 6 – bug6.js
**Intended Behavior**: Read a file asynchronously and either log its contents or log a clear error when read fails.  
**Issue Type**: API misuse / incorrect callback handling — wrong parameter order or misinterpreted callback signature.  
**Notes**: Causes silent failure or misreported output when file is missing. Fix by following Node convention `(err, data)` and explicitly check `if (err)`. Add tests that read an existing file (expect contents) and a non-existent file (expect handled error and non-zero process outcome or logged error).