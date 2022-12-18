from flask_app.config.mysqlconnection import connectToMySQL

DB = 'dojos_and_ninjas_schema'

# Method returns all row(s) from table table_name
# loads the results in to a list of model instances and returns the list
# if id is given returns only one row
# Returns False if the result is empty

@staticmethod
def select(table_name : str, model : object, id : int = -1):
    where_str = "" if id == -1 else f"WHERE {table_name}.id = %(id)s"

    query = f"SELECT * FROM {table_name} {where_str};"
    print("********** CRUD Helper - select_all() - query --> " + query)

    result = connectToMySQL(DB).query_db(query, {"id" : id})
    if (result):
        # if id is given return one row 
        if id != -1:
            return model(result[0])
        else:
            model_list = []
            for row in result:
                model_list.append(model(row))

            return model_list

    return False    

# Method inserts a row (values given in data) in to table table_name
# using the column names given in columns tuple and returns the id of the row inserted
@staticmethod
def insert(*, table_name : str, columns : tuple, data : dict):
    query = f"INSERT INTO {table_name}({','.join(columns)}) VALUES(%({')s, %('.join(columns)})s);"
    id = connectToMySQL(DB).query_db(query, data)
    print("********** CRUD Helper - insert() - id --> " + str(id))
    print("********** CRUD Helper - insert() - id --> " + str(id))
    return id    


# Method updates the row corresponding to given id in the table table_name
# columns is a tuple of the column names to be updated
@staticmethod
def update(*, table_name : str, columns : tuple, data : dict):
    set_string = f"{columns[0]} = %({columns[0]})s"
    for i in range(1, len(columns)):
        set_string += f", {columns[i]} = %({columns[i]})s"

    query = f"UPDATE {table_name} SET {set_string} WHERE id = %(id)s;"
    connectToMySQL(DB).query_db(query, data)


# Method deletes the row corresponding to the given id in  table table_name
@staticmethod
def delete(*, table_name : str, id : int):
    print("********** CRUD Helper - delete() - id --> " + str(id))
    query = f"DELETE FROM {table_name} WHERE id = %(id)s;"
    connectToMySQL(DB).query_db(query, {'id' : id})