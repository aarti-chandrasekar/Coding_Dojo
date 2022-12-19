from flask import render_template, session, redirect, request  

from flask_app import app
from flask_app.models.book_model import Book
from flask_app.models.user_model import User
from flask_app.models.favorite_model import Favorite


# Books Page Route
@app.route('/books')          
def books_page():
    data_list = Book.get_all()
    print("********** Book Controller - books_page() - data_list --> " + str(data_list))
    return render_template("books.html", data_list = data_list)

# Book Info Route
@app.route('/books/<id>')          
def info_book(id):
    data_dict = {'book' : Book.get_book_and_users(id)}
    data_dict['all_users'] = User.get_users_not_favorite_book(id)
    return render_template("book_info.html", data_dict = data_dict)

# Create New Book Button Click Route
@app.route('/books/create', methods=['POST'])          
def create_book():
    print("********** Book Controller - create_book() - request --> " + str(request.form))
    id = Book.insert(request.form)
    return redirect("/books")

# Add Favorite Book Button Click Route
@app.route('/books/favorite', methods=['POST'])          
def favorite_book():
    print("********** Book Controller - favorite_book() - request --> " + str(request.form))
    id = Favorite.insert(request.form)
    if request.form['page'] == 'book':
        return redirect(f"/books/{request.form['book_id']}")
    else:
        return redirect(f"/users/{request.form['user_id']}")
