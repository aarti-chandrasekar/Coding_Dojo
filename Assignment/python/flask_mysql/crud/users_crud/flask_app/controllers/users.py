from flask import render_template, session, redirect, request  

from flask_app import app
from flask_app.models.user import User


@app.route('/')          
@app.route('/users')          
def landing_page():
    data_list = User.get_all()
    return render_template("index.html", data_list = data_list)

@app.route('/users/<id>')          
def info(id):
    data = User.get_by_id(id)
    return render_template("user_info.html", data = data)

@app.route('/users/new')          
@app.route('/users/<id>/edit')          
def add_update(id=0):
    print ("ID @@@@@@@@@@@@@ " + str(id))
    data = User({"id" : "",
                "first_name" : "",
                "last_name" : "",
                "email" : "",
                "created_at" : "",
                "updated_at" : "" })
    data.action = "Add"

    if id != 0:
        data = User.get_by_id(id)
        data.action = "Edit"

    return render_template("add_edit_user.html", data = data)

@app.route('/users/create', methods=['POST'])          
def create():
    print("********** " + str(request.form))
    id = User.insert(request.form)
    return redirect(f"/users/{id}")

@app.route('/users/<id>/update', methods=['POST'])          
def update(id):
    print("********** " + str(request.form))
    data = request.form.copy()
    data['id'] = id
    User.update(data)
    return redirect(f"/users/{id}")

@app.route('/users/<id>/destroy')          
def delete(id):
    User.delete({"id" : id})
    return redirect("/users")