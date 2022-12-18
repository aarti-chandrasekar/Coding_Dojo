from flask import render_template, session, redirect, request  

from flask_app import app
from flask_app.models.dojo_model import Dojo
from flask_app.models.ninja_model import Ninja

# Add/Edit Ninja Route
@app.route('/ninjas/new')          
@app.route('/ninjas/<id>/edit')          
def add_update_ninja(id=0):
    data = Ninja({"id" : "",
                "first_name" : "",
                "last_name" : "",
                "age" : "",
                "created_at" : "",
                "updated_at" : "", 
                "dojo_id" : ""})
    data.action = "Add"

    if id != 0:
        data = Ninja.get_by_id(id)
        data.action = "Edit"

    data.dojo_list = Dojo.get_all()
    return render_template("add_edit_ninja.html", data = data)

# Create New Ninja Button Click Route
@app.route('/ninjas/create', methods=['POST'])          
def create_ninja():
    print("********** Ninja Controller - create_ninja() - request --> " + str(request.form))
    id = Ninja.insert(request.form)
    return redirect(f"/dojos/{request.form['dojo_id']}")

# Update Ninja Button Click Route
@app.route('/ninjas/<id>/update', methods=['POST'])          
def update_ninja(id):
    print("********** Ninja Controller - update_ninja() - request --> " + str(request.form))
    Ninja.update(request.form)
    return redirect(f"/dojos/{request.form['dojo_id']}")

# Delete Ninja Button Click Route
@app.route('/ninjas/<id>/delete', methods=['POST'])          
def delete_ninja(id):
    print("********** Ninja Controller - delete_ninja() - id --> " + str(id))
    Ninja.delete({"id" : id})
    return redirect(f"/dojos/{request.form['dojo_id']}")
