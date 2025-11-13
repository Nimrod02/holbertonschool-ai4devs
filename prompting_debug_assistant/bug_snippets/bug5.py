# ...existing code...
# Intended: Calculate average of grades (intentional type error retained)
grades = ["90", "80", "70"]
print("Grades list:", grades)
total = sum(grades)  # TypeError: unsupported operand type(s) for +: 'int' and 'str'
average = total / len(grades)
print("Average:", average)
print("Note: This file intentionally contains a type error.")
print("End of bug5.py")
# End of file