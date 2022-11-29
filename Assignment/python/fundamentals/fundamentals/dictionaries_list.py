x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# 1 Update Values in Dictionaries and Lists
# -----------------------------------------

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15
print(x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = 'Bryant'
print(students[0])

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'
print(sports_directory['soccer'])

# Change the value 20 in z to 30
z[0]['y'] = 30
print(z[0])

# 2 Iterate Through a List of Dictionaries - With Bonus Assignment
# ----------------------------------------------------------------
def iterateDictionary(some_list):
    for dict_element in some_list:
        dlen = len(dict_element)
        i = 1
        for key in dict_element:
            if i == dlen: #if last key-value print without comma
                print(key, "-", dict_element[key])
            else:
                print(key, "-", dict_element[key], end=', ')
            i += 1

print("Student first and last names")
print("----------------------------")
iterateDictionary(students)

# 3 Get Values From a List of Dictionaries
# -----------------------------------------
def iterateDictionary2(key_name, some_list):
    for dict_element in some_list:
        if key_name in dict_element:
            print(dict_element[key_name])

print("Student first names")
print("-------------------")
iterateDictionary2(some_list=students, key_name='first_name')

print("Student last names")
print("------------------")
iterateDictionary2('last_name', students)

# 4 Iterate Through a Dictionary with List Values
# ------------------------------------------------
def printInfo(some_dict):
    for key in some_dict:
        lst = some_dict[key]
        print(len(lst), key.upper())
        for elem in lst:
            print(elem)

print("Sports Directory")
print("----------------")
printInfo(sports_directory)
