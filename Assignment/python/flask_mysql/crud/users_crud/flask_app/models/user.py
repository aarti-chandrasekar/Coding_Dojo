from flask_app.config.mysqlconnection import connectToMySQL

SCHEMA = 'users_schema'
TABLE = 'users'

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = f"SELECT * FROM {TABLE};"
        db_dict_list = connectToMySQL(SCHEMA).query_db(query)
        obj_list = []
        for row in db_dict_list:
            obj_list.append(cls(row))
        return obj_list

    @classmethod
    def get_by_id(cls, id):
        query = f"SELECT * FROM {TABLE} WHERE id = %(id)s;"
        data = {"id" : id}
        db_dict_list = connectToMySQL(SCHEMA).query_db(query, data)
        if (len(db_dict_list) > 0):
            return cls(db_dict_list[0])
        return None

    @classmethod
    def insert(cls,data):
        query = f"INSERT INTO {TABLE} (first_name, last_name, email) VALUES(%(first_name)s, %(last_name)s, %(email)s);"
        id = connectToMySQL(SCHEMA).query_db(query, data)
        return id    

    @classmethod
    def update(cls,data):
        query = f"UPDATE {TABLE} SET first_name = %(first_name)s, last_name =  %(last_name)s, email =  %(email)s, updated_at = NOW() WHERE id = %(id)s;"
        connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def delete(cls,data):
        query = f"DELETE FROM {TABLE} WHERE id = %(id)s;"
        connectToMySQL(SCHEMA).query_db(query, data)