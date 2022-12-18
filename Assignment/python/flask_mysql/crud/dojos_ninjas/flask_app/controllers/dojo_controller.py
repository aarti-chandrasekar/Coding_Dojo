from flask import render_template, session, redirect, request  

from flask_app import app
from flask_app.models.dojo_model import Dojo
from flask_app.models.ninja_model import Ninja


# Landing Page Route
@app.route('/')          
@app.route('/dojos')          
def landing_page():
    data_list = Dojo.get_all()
    print("********** Dojo Controller - landing_page() - data_list --> " + str(data_list))
    return render_template("index.html", data_list = data_list)

# Dojo & Ninjas Info Route
@app.route('/dojos/<id>')          
def info_dojo(id):
    res_dict = Ninja.get_by_dojo_id(id)
    return render_template("dojo_info.html", res_dict = res_dict)

# Create New Dojo Button Click Route
@app.route('/dojos/create', methods=['POST'])          
def create_dojo():
    print("********** Dojo Controller - create_dojo() - request --> " + str(request.form))
    id = Dojo.insert(request.form)
    return redirect("/dojos")
