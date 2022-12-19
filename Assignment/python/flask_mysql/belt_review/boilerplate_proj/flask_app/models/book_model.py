from flask import flash

from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import CrudHelper
from flask_app.config.constants import SCHEMA
from flask_app.models import user_model

TABLE = 'books'
COLUMNS = ('title', 'num_of_pages',)  # Columns used in INSERT/UPDATE queries


# Model (class representation) for DB Table books
class Book:
    def __init__(self,data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.title = data['f{TABLE}.title'] if f'{TABLE}.title' in data else data['title'] 
        self.num_of_pages = data[f'{TABLE}.num_of_pages'] if f'{TABLE}.num_of_pages' in data else data['num_of_pages']
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']

        self.users_list = []

    def __repr__(self) -> str:
        ret_str = f"""Book Model ------------> id = {self.id}, title = {self.title},  num_of_pages = {self.num_of_pages}, 
            created_at = {self.created_at}, updated_at = {self.updated_at} \n"""
        
        # TODO - Change this
        ret_str += f"users_list = {self.users_list}" if hasattr(self, "users_list") else ""
        return ret_str

    # Method returns all the books from DB
    @classmethod
    def get_all(cls):
        return CrudHelper.select(table_name = TABLE, model = cls)


    # Method returns the book info for the given id  from DB
    # Also returns a list of associated ninjas
    @classmethod
    def get_by_id(cls, id):
        return CrudHelper.select(table_name = TABLE, model = cls, id = id)


    # Method inserts a new book info in to DB
    @classmethod
    def insert(cls,data):
        return CrudHelper.insert(table_name = TABLE, columns = COLUMNS, data = data)


    # Method updates the book info for given id in DB
    @classmethod
    def update(cls,data):
        CrudHelper.update(table_name = TABLE, columns = COLUMNS, data = data)


    # Method deletes book info for given id in DB
    @classmethod
    def delete(cls, id):
        CrudHelper.delete(table_name = TABLE, id = id)

    # Method returns model Book filled with users_list : list of users who have the given books as favorite  from DB
    @classmethod
    def get_book_and_users(cls, book_id):
        query = f"""SELECT *  FROM books 
                    LEFT JOIN favorites ON books.id = favorites.book_id
                    LEFT JOIN users ON users.id = favorites.user_id
                    WHERE books.id = %(book_id)s ;"""
        
        result = connectToMySQL(SCHEMA).query_db(query, {"book_id" : book_id})
        print("********** Book Model - get_book_and_users() - result --> " + str(result))

        if result :
            book_model = cls(result[0])

            user_list = []
            if result[0]['users.id'] != None:
                for row in result:
                    user_list.append(user_model.User(row))
            
            book_model.users_list = user_list
            
            print("********** Book Model - get_book_and_users() - book_model --> " + str(book_model))

            return book_model

        return False   

    # Method returns all the books that are not given user's favorite from DB
    @classmethod
    def get_books_not_user_favorite(cls, user_id):
        query = f"""SELECT * FROM books WHERE id NOT IN (
                        SELECT book_id FROM favorites WHERE user_id = %(user_id)s);"""

        result = connectToMySQL(SCHEMA).query_db(query, {"user_id": user_id})
        print("********** Book Model - get_books_not_user_favorite() - result --> " + str(result))

        if result:
            book_list = []
            for row in result:
                book_list.append(cls(row))

            print("********** Book Model - get_books_not_user_favorite() - book_list --> " + str(book_list))

            return book_list

        return False       

    # Validator method
    @staticmethod
    def validate(book) :
        is_valid = True

        l = len(book['title'].strip())
        if l<1 or l>255 or not book['title'].isalnum():
            flash('Tile cannot be empty and should be less than or equal to 255 characters', 'title')
            is_valid = False

        if not book['num_of_pages'].isnumeric():
            flash('Not a valid number', 'num_of_pages')
            is_valid = False

        return is_valid
