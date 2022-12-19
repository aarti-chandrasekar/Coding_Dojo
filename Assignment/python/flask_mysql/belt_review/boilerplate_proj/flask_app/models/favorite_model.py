from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import CrudHelper


TABLE = 'favorites'
COLUMNS = ('user_id', 'book_id',)  # Columns used in INSERT/UPDATE queries


# Model (class representation) for DB Table favorites
class Favorite:
    def __init__(self,data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.user_id = data['f{TABLE}.user_id'] if f'{TABLE}.user_id' in data else data['user_id'] 
        self.book_id = data[f'{TABLE}.book_id'] if f'{TABLE}.book_id' in data else data['book_id']
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']


    # Method inserts a new favorite in to DB
    @classmethod
    def insert(cls,data):
        return CrudHelper.insert(table_name = TABLE, columns = COLUMNS, data = data)
