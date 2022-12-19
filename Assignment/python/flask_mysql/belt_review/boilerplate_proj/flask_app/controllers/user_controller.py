from flask import render_template, session, redirect, request  

from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.book_model import Book


# Landing Page Route
@app.route('/')          
@app.route('/users')          
def landing_page():
    data_list = User.get_all()
    print("********** User Controller - landing_page() - data_list --> " + str(data_list))
    return render_template("users.html", data_list = data_list)

# User Info Route
@app.route('/users/<id>')          
def info_user(id):
    print("********** User Controller - info_user() - id --> " + str(id))
    data_dict = {'user' : User.get_user_and_books(id)}
    data_dict['all_books'] = Book.get_books_not_user_favorite(id)
    return render_template("user_info.html", data_dict = data_dict)

# Create New User Button Click Route
@app.route('/users/create', methods=['POST'])          
def create_user():
    print("********** User Controller - create_user() - request --> " + str(request.form))
    id = User.insert(request.form)
    return redirect(f"/users")
