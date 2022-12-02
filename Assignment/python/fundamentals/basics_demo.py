"""
    This is an example of multi-line comment
"""
# snake_case for variables
f_name = "Aarti"
l_name = "Chandrasekar"
age = 43

# SNAKE_CASE for GLOBAL_VAR aka CONSTANTS
FAV_COLOR = "Orange"

# Tuples example - Immutable - Best suited for CONSTANTS
FAV_BOOKS = ("7 Habits", "Eat that Frog", "Power of Positive Thinking")

# Str Concat -  , VS +
# , adds a blank space between strings by default
# , can contanetate str and number without typecasting
print("My name is", f_name, l_name, "and I'm", age, "years old")

# + accepts only str so other datatypes should be typecasted
print("My name is " + f_name + " " + l_name + " and I'm " + str(age) + " years old")

# Str Interpolation - f-string VS format VS %
# f-string is the latest only from Ver 3.6
print(f"My name is {f_name} {l_name} and I'm {age} years old")
# format is the older way
print("My name is {} {} and I'm {} years old".format(f_name, l_name, age))
# % is the oldest way
print("My name is %s %s and I'm %d years old" % (f_name, l_name, age))