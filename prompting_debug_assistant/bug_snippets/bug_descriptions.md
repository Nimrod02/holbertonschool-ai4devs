## Bug 1 – bug1.py
**Intended Behavior**: Parse command-line args into a config object where `--verbose` toggles a boolean and `--limit <int>` sets a numeric limit, then print the resulting config.  
**Issue Type**: Syntax error.  
**Notes**: Missing colon after `def parse_args(args)` and an unclosed parenthesis in `for i in range(len(args)`. Python fails to parse before any logic runs.

## Bug 2 – bug2.js
**Intended Behavior**: Compute a weighted average as `sum(values[i] * weights[i]) / sum(weights)`.  
**Issue Type**: Logical error.  
**Notes**: Returns `sum(weights) / values.length` instead of `sum(v*w)/sum(w)`. Produces wrong results and ignores the actual values; also doesn’t guard against `sum(weights) === 0`.

## Bug 3 – bug3.java
**Intended Behavior**: Normalize a list of titles by trimming whitespace and uppercasing each string; `null` items should be skipped or handled safely.  
**Issue Type**: Runtime exception (NullPointerException).  
**Notes**: `normalizeTitle` calls `s.trim()` without checking for `null`. The input list intentionally contains a `null`, causing a NPE during iteration.

## Bug 4 – bug4.cpp
**Intended Behavior**: Sum all elements of a `std::vector<int>` without reading out of bounds.  
**Issue Type**: Off-by-one / loop bounds error.  
**Notes**: Loop uses `i <= v.size()` and accesses `v[i]` at `i == v.size()`, which is out-of-range and yields undefined behavior. Should use `i < v.size()` or a range-based loop.

## Bug 5 – bug5.py
**Intended Behavior**: Load sales data, coerce `revenue` to numeric, apply a 20% uplift to EU rows, fix March’s revenue, then group by `region` and sum `revenue`.  
**Issue Type**: Misuse of data types/libraries (pandas).  
**Notes**: Uses `to_numeric(..., errors="ignore")` leaving non-numeric `"x"` as string; chained assignment on a filtered view (`SettingWithCopy` risk); `iloc` incorrectly used with a label `"03"`; groups by `region` but aggregates non-existent `amount` column.

## Bug 6 – bug6.js
**Intended Behavior**: Fetch multiple URLs, write each response to disk, and only log success after all writes complete; propagate errors; return resolved data (not Promises).  
**Issue Type**: Asynchronous control-flow misuse.  
**Notes**: Uses `urls.map(async ...)` but doesn’t `await` the resulting Promises or `Promise.all(...)`. Logs completion too early and swallows errors from the async tasks.