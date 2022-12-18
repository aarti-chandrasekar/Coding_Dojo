from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import *

TABLE = 'ninjas'
COLUMNS = ('first_name', 'last_name', 'age', 'dojo_id')  # Columns used in INSERT/UPDATE queries


# Model (class representation) for DB Table ninjas
class Ninja:
    def __init__(self,data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.first_name = data[f'{TABLE}.first_name'] if f'{TABLE}.first_name' in data else data['first_name']
        self.last_name = data[f'{TABLE}.last_name'] if f'{TABLE}.last_name' in data else data['last_name']
        self.age = data[f'{TABLE}.age'] if f'{TABLE}.age' in data else data['age']
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']
        self.dojo_id = data[f'{TABLE}.dojo_id'] if f'{TABLE}.dojo_id' in data else data['dojo_id']


    def __repr__(self) -> str:
        ret_str = f"""Ninja Model ------------> id = {self.id}, first_name = {self.first_name}, 
            last_name = {self.last_name}, age = {self.age},
            created_at = {self.created_at}, updated_at = {self.updated_at},
            dojo_id = {self.dojo_id} \n"""
        
        ret_str += f"dojo_list = {self.dojo_list}" if hasattr(self, "dojo_list") else ""
        return ret_str


    # Method returns all the ninjas from DB
    @classmethod
    def get_all(cls):
        return select(table_name = TABLE, model = cls)


    # Method returns the ninja info for the given id  from DB
    @classmethod
    def get_by_id(cls, id):
        return select(table_name = TABLE, model = cls, id = id)
    

    # Method inserts a new ninja info in to DB
    @classmethod
    def insert(cls,data):
        return insert(table_name = TABLE, columns = COLUMNS, data = data)


    # Method updates the ninja info for given id in DB
    @classmethod
    def update(cls,data):
        update(table_name = TABLE, columns = COLUMNS, data = data)


    # Method deletes ninja info for given id in DB
    @classmethod
    def delete(cls,data):
        delete(table_name = TABLE, id = data['id'])

        
    # Method returns a dict {data_list : list of Ninja associated with the given dojo_id  from DB,
    #                           dojo_name : dojo_name}
    @classmethod
    def get_by_dojo_id(cls, dojo_id):
        query = f"""SELECT ninjas.*, dojos.name FROM dojos 
                    LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id
                    WHERE dojos.id = %(dojo_id)s ;"""
        
        result = connectToMySQL(DB).query_db(query, {"dojo_id" : dojo_id})
        print("********** Ninja Model - get_by_dojo_id() - result --> " + str(result))

        if result :
            model_list = []
            if result[0]['id'] != None:
                for row in result:
                    model_list.append(cls(row))
            
            res_dict = {'data_list' : model_list, 'dojo_name' : result[0]['name']}

            print("********** Ninja Model - get_by_dojo_id() - model_list --> " + str(res_dict))

            return res_dict

        return False             