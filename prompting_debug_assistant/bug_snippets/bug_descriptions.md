## Bug 1 – bug1.py
**Intended Behavior**: Sum all integers in the list `numbers` and print a single line "Sum: <total>" (for the shipped sample [1,2,3,4,5] the output must be "Sum: 15").  
**Issue Type**: Syntax error — missing colon after `for` statement.  
**Notes**: The parser fails before runtime because Python requires a colon to denote the start of a loop block. This prevents any code execution. The fix is simple: add the missing colon (`for n in numbers:`). Alternatively, replace the loop with `total = sum(numbers)` for conciseness. Add a regression test that runs the script and asserts stdout exactly equals "Sum: 15".

---

## Bug 2 – bug2.js
**Intended Behavior**: Export a function `isEven(n)` that returns `true` when n is an even integer, and `false` when n is odd.  
**Issue Type**: Logical error — parity condition inverted (checks for odd instead of even).  
**Notes**: The current condition `n % 2 === 1` identifies odd numbers, causing the function to return the opposite of what callers expect. All even inputs return `false` and all odd inputs return `true`. Fix by changing the condition to `n % 2 === 0`. Add input validation (`Number.isInteger(n)`) and unit tests for edge cases: `-2, 0, 1, 2, 3` with expected outputs `true, true, false, true, false`.

---

## Bug 3 – bug3.java
**Intended Behavior**: Print the third element (index 2) of the `nums` array only when the array contains at least three elements; if the array has fewer than three elements, print a user-friendly message.  
**Issue Type**: Runtime exception — array index out of bounds (unchecked bounds access).  
**Notes**: The code unconditionally accesses `nums[2]` without verifying array length. With `int[] nums = {10,20}`, this throws `ArrayIndexOutOfBoundsException` and terminates execution. The fix is to guard the access: `if (nums.length > 2) { System.out.println(nums[2]); } else { System.out.println("Array has fewer than 3 elements."); }`. Add two tests: one with a length-2 array (verify graceful message) and one with a length-3+ array (verify correct value printed).

---

## Bug 4 – bug4.cpp
**Intended Behavior**: Iterate over an integer array of size `size` and print each element exactly once (from index 0 to size-1).  
**Issue Type**: Off-by-one / bounds error — loop condition uses `<=` instead of `<`, accessing one element past the valid range.  
**Notes**: The loop `for (int i = 0; i <= size; i++)` reads `nums[size]`, which is outside the allocated array bounds. This causes undefined behavior: possible segmentation fault, garbage output, or silent memory corruption. Fix by changing the condition to `i < size`. Validate that `size` is non-negative and matches the actual array length. Add boundary tests: size=0 (no output, no crash), size=1 (print one element), and larger sizes to detect off-by-one regressions.

---

## Bug 5 – bug5.py
**Intended Behavior**: Parse numeric grades stored as strings, compute their arithmetic mean, and print the result (for input `["90","80","70"]` output `80.0`).  
**Issue Type**: Type error — attempting arithmetic on string objects without prior conversion.  
**Notes**: The `sum(grades)` call fails because grades are strings (`["90","80","70"]`), and Python's `sum()` function expects numeric iterables. The error is `TypeError: unsupported operand type(s)`. Fix by converting each grade to an integer before summing: `nums = [int(g) for g in grades]` or `total = sum(map(int, grades))`. Also handle the empty list case to avoid `ZeroDivisionError`. Add tests for valid numeric strings, floats, and malformed entries (should raise an informative error or skip).

---

## Bug 6 – bug6.js
**Intended Behavior**: Asynchronously read a file and either print its contents on success or print a clear error message on failure.  
**Issue Type**: API misuse — incorrect callback parameter order or logic (callback signature `(err, data)` not respected).  
**Notes**: Node.js file read callbacks follow the convention `(err, data)`, but the code may interpret parameters in the wrong order or fail to check for errors. This causes silent failures: when a file is missing, the error is treated as data or ignored entirely, and no output is produced. The fix is to strictly follow the Node convention: `fs.readFile(path, (err, data) => { if (err) { console.error(err); return; } console.log(data); })`. Add integration tests: read an existing file (expect contents printed) and a non-existent file (expect error logged and proper exit code).
