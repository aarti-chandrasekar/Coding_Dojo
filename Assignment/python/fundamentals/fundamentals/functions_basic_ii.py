def countdown(from_num=10):
    num_list = []
    for i in range(from_num, -1, -1):
        num_list.append(i)
    return num_list

print("Countdown Begins....." + str(countdown()))
print("Countdown Begins....." + str(countdown(5)))


def print_return(lst):
    print("First element -", lst[0])
    return lst[1]

print("Returned Value :", print_return([25,50]))

def first_plus_len(lst):
    return lst[0] + len(lst)

print("First Value + List Length :", first_plus_len([25,50,3,5,7,8,1]))

def list_grtr_than_second(lst):
    lst_len = len(lst)
    if lst_len < 2:
        return False
    
    new_lst = []
    sec = lst[1]
    for elmnt in lst:
        if elmnt > sec:
            new_lst.append(elmnt)
    
    print("No of elements in the list greater than second element -", len(new_lst))
    return new_lst

print ("The elements greater than second one are", 
list_grtr_than_second([45,10,67,4,12,77,2,22,79]))

def create_list(sz, val):
    lst = [val]
    lst *= sz
    return lst

print(create_list(5,2))
