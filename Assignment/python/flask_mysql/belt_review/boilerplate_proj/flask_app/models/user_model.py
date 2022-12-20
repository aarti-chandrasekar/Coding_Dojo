import re
from flask import flash

from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.crud_helper import CrudHelper
from flask_app.config.constants import SCHEMA



TABLE = 'users'
COLUMNS = ('first_name', 'last_name', 'email', 'password', )  # Columns used in INSERT/UPDATE queries
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


# Model (class representation) for DB Table users
class User:
    def __init__(self, data):
        self.id = data[f'{TABLE}.id'] if f'{TABLE}.id' in data else data['id']
        self.first_name = data[f'{TABLE}.first_name'] if f'{TABLE}.first_name' in data else data['first_name']
        self.last_name = data[f'{TABLE}.last_name'] if f'{TABLE}.last_name' in data else data['last_name']
        self.email = data[f'{TABLE}.email'] if f'{TABLE}.email' in data else data['email']
        self.password = data[f'{TABLE}.password'] if f'{TABLE}.password' in data else data['password']
        self.created_at = data[f'{TABLE}.created_at'] if f'{TABLE}.created_at' in data else data['created_at']
        self.updated_at = data[f'{TABLE}.updated_at'] if f'{TABLE}.updated_at' in data else data['updated_at']


    def __repr__(self) -> str:
        ret_str = f"""User Model ------------> id = {self.id}, first_name = {self.first_name}, 
            last_name = {self.last_name}, email = {self.email}, password = {self.password}, 
            created_at = {self.created_at}, updated_at = {self.updated_at},\n"""

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


    # Method returns the user info for the given email from DB
    @classmethod
    def get_by_email(cls, email):
        query = f"""SELECT *  FROM users 
                    WHERE users.email = %(email)s ;"""

        result = connectToMySQL(SCHEMA).query_db(query, {"email": email})
        print("********** User Model - get_by_email() - result --> " + str(result))

        if result:
            user_model = cls(result[0])

            print("********** User Model - get_by_email() - user_model --> " + str(user_model))

            return user_model

        return False



    # Validator method
    @staticmethod
    def validate(req) :
        is_valid = True

        # Login Validation
        if req['form'] == 'login':
            # Email is minimum 3 characters long(a@b) and less than equal 320 characters
            # Not valid email pattern
            # User / email does not exist in DB
            # Password is minimum 8 characters long and less than equal 60 characters
            le = len(req['email'].strip())
            lp = len(req['password'].strip())
            if le < 3 or le > 320 \
                    or not EMAIL_REGEX.match(req['email']) \
                    or not User.get_by_email(req['email']) \
                    or lp < 8 or lp > 60:
                
                flash("Invalid email / password", 'login')
                is_valid = False


        # Register Validation
        if req['form'] == 'register':
            # First Name is minimum 2 characters and less than equal 45 characters
            l = len(req['first_name'].strip())
            if l < 2 or l > 45:
                flash("First Name must be minimum 2 characters and less than equal to 45", 'first_name')
                is_valid = False

            
            # Last Name is minimum 2 characters and less than equal 45 characters
            l = len(req['last_name'].strip())
            if l < 2 or l > 45:
                flash("Last Name must be minimum 2 characters and less than equal to 45", 'last_name')
                is_valid = False


            # Email is minimum 3 characters long(a@b) and less than equal 320 characters
            l = len(req['email'].strip())
            if l < 3 or l > 320:
                flash("Email must be minimum 2 characters and less than equal to 320", 'email')
                is_valid = False

            # Not valid email pattern
            elif not EMAIL_REGEX.match(req['email']): 
                flash("Invalid email address", 'email')
                is_valid = False

            # User / email already exists in DB
            elif User.get_by_email(req['email']):
                flash("Email address already registered ", 'email')
                is_valid = False

            
            # Password & Confirm Password are minimum 8 characters long and less than equal 60 characters
            lp = len(req['password'].strip())
            lc = len(req['confirm_password'].strip())
            if lp < 8 or lp > 60 \
                    or lc < 8 or lc > 60:
                flash("Password & Confirm Password must be minimum 8 characters and less than equal to 60", 'password')
                is_valid = False

            # Pwd Confirm Pwd mismatch
            elif req['confirm_password'] != req['password']:
                flash("Password & Confirm Password do not match", 'password')
                is_valid = False

        return is_valid        