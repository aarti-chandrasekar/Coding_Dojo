from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import *


TABLE = 'dojos'
COLUMNS = ('name',)  # Columns used in INSERT/UPDATE queries


# Model (class representation) for DB Table dojos
class Dojo:
    def __init__(self,data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.name = data['f{TABLE}.name'] if f'{TABLE}.name' in data else data['name'] 
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']

    def __repr__(self) -> str:
        ret_str = f"""Dojo Model ------------> id = {self.id}, name = {self.name}, 
            created_at = {self.created_at}, updated_at = {self.updated_at} \n"""
        
        ret_str += f"ninja_list = {self.ninja_list}" if hasattr(self, "ninja_list") else ""
        return ret_str

    # Method returns all the dojos from DB
    @classmethod
    def get_all(cls):
        return select(table_name = TABLE, model = cls)


    # Method returns the dojo info for the given id  from DB
    # Also returns a list of associated ninjas
    @classmethod
    def get_by_id(cls, id):
        return select(table_name = TABLE, model = cls, id = id)


    # Method inserts a new dojo info in to DB
    @classmethod
    def insert(cls,data):
        return insert(table_name = TABLE, columns = COLUMNS, data = data)


    # Method updates the dojo info for given id in DB
    @classmethod
    def update(cls,data):
        update(table_name = TABLE, columns = COLUMNS, data = data)


    # Method deletes dojo info for given id in DB
    @classmethod
    def delete(cls, id):
        delete(table_name = TABLE, id = id)