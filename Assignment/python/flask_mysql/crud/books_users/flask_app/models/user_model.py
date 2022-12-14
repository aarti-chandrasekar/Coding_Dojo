from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import CrudHelper
from flask_app.config.constants import SCHEMA

from flask_app.models import book_model


TABLE = 'users'
COLUMNS = ('name',)  # Columns used in INSERT/UPDATE queries


# Model (class representation) for DB Table users
class User:
    def __init__(self, data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.name = data[f'{TABLE}.name'] if f'{TABLE}.name' in data else data['name']
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']

        self.books_list = []

    def __repr__(self) -> str:
        ret_str = f"""User Model ------------> id = {self.id}, name = {self.name}, 
            created_at = {self.created_at}, updated_at = {self.updated_at},\n"""

        # TODO Fix this
        ret_str += f"dojo_list = {self.dojo_list}" if hasattr(
            self, "dojo_list") else ""
        return ret_str

    # Method returns all the users from DB

    @classmethod
    def get_all(cls):
        return CrudHelper.select(table_name=TABLE, model=cls)

    # Method returns the user info for the given id  from DB

    @classmethod
    def get_by_id(cls, id):
        return CrudHelper.select(table_name=TABLE, model=cls, id=id)

    # Method inserts a new user info in to DB

    @classmethod
    def insert(cls, data):
        return CrudHelper.insert(table_name=TABLE, columns=COLUMNS, data=data)

    # Method updates the user info for given id in DB

    @classmethod
    def update(cls, data):
        CrudHelper.update(table_name=TABLE, columns=COLUMNS, data=data)

    # Method deletes user info for given id in DB

    @classmethod
    def delete(cls, data):
        CrudHelper.delete(table_name=TABLE, id=data['id'])

    # Method returns model User filled with books_list : list of favorite books for a given user  from DB

    @classmethod
    def get_user_and_books(cls, user_id):
        query = f"""SELECT *  FROM users 
                    LEFT JOIN favorites ON users.id = favorites.user_id
                    LEFT JOIN books ON books.id = favorites.book_id
                    WHERE users.id = %(user_id)s ;"""

        result = connectToMySQL(SCHEMA).query_db(query, {"user_id": user_id})
        print("********** User Model - get_by_dojo_id() - result --> " + str(result))

        if result:
            user_model = cls(result[0])

            book_list = []
            if result[0]['books.id'] != None:
                for row in result:
                    book_list.append(book_model.Book(row))

            user_model.books_list = book_list

            print(
                "********** User Model - get_user_and_books() - user_model --> " + str(user_model))

            return user_model

        return False

    # Method returns all the users who do not have a book as their favorite from DB
    @classmethod
    def get_users_not_favorite_book(cls, book_id):
        query = f"""SELECT * FROM users WHERE id NOT IN ( 
                    SELECT user_id FROM favorites WHERE book_id = %(book_id)s);"""

        result = connectToMySQL(SCHEMA).query_db(query, {"book_id": book_id})
        print("********** User Model - get_users_not_favorite_book() - result --> " + str(result))

        if result:
            user_list = []
            for row in result:
                user_list.append(cls(row))

            print("********** User Model - get_users_not_favorite_book() - user_model --> " + str(user_list))

            return user_list

        return False