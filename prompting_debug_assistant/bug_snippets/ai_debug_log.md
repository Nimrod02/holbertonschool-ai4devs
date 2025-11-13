## Bug 1 – bug1.py
**AI Diagnosis**: The `for` loop is missing a colon (`:`) after `for n in numbers`, causing a `SyntaxError`.  
**Suggested Fix**: Add a colon to correctly define the loop — `for n in numbers:`.  
**Alternative Fixes Tested**: None needed; adding the colon resolves the issue.  
**Result**: Code executes successfully and prints `Sum: 15` as intended.

---

## Bug 2 – bug2.js
**AI Diagnosis**: The condition `num % 2 == 1` incorrectly identifies odd numbers as even, producing the opposite result.  
**Suggested Fix**: Change the condition to `num % 2 == 0` to correctly detect even numbers.  
**Alternative Fixes Tested**: Simplified version `return num % 2 === 0;` also works as intended.  
**Result**: After correction, `isEven(4)` correctly returns `true` and `isEven(3)` returns `false`.

---

## Bug 3 – bug3.java
**AI Diagnosis**: The code attempts to access `nums[2]`, but the array only has two elements (`nums[0]` and `nums[1]`), causing an `ArrayIndexOutOfBoundsException`.  
**Suggested Fix**: Either add a third element to the array (e.g., `int[] nums = {10, 20, 30};`) or change the index to a valid one like `nums[1]`.  
**Alternative Fixes Tested**: Adding the third element allows printing `30` as intended.  
**Result**: The corrected code prints the third element without throwing an exception.

---

## Bug 4 – bug4.cpp
**AI Diagnosis**: The loop condition `i <= size` iterates one step too far, causing access to `arr[size]`, which is out of bounds and leads to undefined behavior.  
**Suggested Fix**: Change the loop condition to `i < size` so it only accesses valid indices (`0` to `size - 1`).  
**Alternative Fixes Tested**: Verified with `for (int i = 0; i < size; i++)`, which correctly prints all five elements.  
**Result**: The fixed code outputs:
10
20
30
40
50
without errors or memory issues.

---

## Bug 5 – bug5.py
**AI Diagnosis**: The list `grades` contains string values, causing `sum(grades)` to raise a `TypeError` since strings can’t be summed numerically.  
**Suggested Fix**: Convert each grade to an integer or float before summing, e.g. `average = sum(map(int, grades)) / len(grades)`.  
**Alternative Fixes Tested**: Using a list comprehension `[float(g) for g in grades]` also works correctly.  
**Result**: After conversion, the code executes successfully and prints `Average: 80.0`.

---

## Bug 6 – bug6.js
**AI Diagnosis**: The callback parameters in `fs.readFile` are reversed — it should be `(err, data)` instead of `(data, err)`. This causes `err` to contain the file contents and `data` to be `undefined`.  
**Suggested Fix**: Swap the parameters to `fs.readFile('test.txt', 'utf8', (err, data) => { ... })`.  
**Alternative Fixes Tested**: Verified correct behavior with the parameter order fixed.  
**Result**: The corrected code properly prints the contents of `test.txt` or logs an error if the file cannot be read.

