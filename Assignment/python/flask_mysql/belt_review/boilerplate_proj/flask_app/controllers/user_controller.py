from flask import render_template, session, redirect, request, flash, url_for  
from flask_bcrypt import Bcrypt

from flask_app import app
from flask_app.models.user_model import User

bcrypt = Bcrypt(app)

# Landing Page Route
@app.route('/')          
def landing_page():
    print("********** User Controller - landing_page()  " )
    return render_template("login_reg.html")

# Landing Page Route
@app.route('/dashboard')          
def dashboard():
    print("********** User Controller - dashboard()  " )
    # Check Valid Session
    if 'user_id' not in session:
        return redirect("/")
    return render_template("dashboard.html")    


# Register Button Click Route
@app.route('/users/register', methods=['POST'])          
def register_user():
    print("********** User Controller - register_user() - request --> " + str(request.form))
    if User.validate(request.form):
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        print(pw_hash)
        id = User.insert({**request.form, 'password' : pw_hash})

        # Clear the values used for pre-population from session
        session.clear()
        
        session['user_id'] = id
        session['user_name'] = f"{request.form['first_name'] } {request.form['last_name'] }"

        return redirect("/dashboard")

    # Store in session to pre-populated the form
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    return redirect("/")

# Login Button Click Route
@app.route('/users/login', methods=['POST'])          
def login_user():
    print("********** User Controller - login_user() - request --> " + str(request.form))
    if User.validate(request.form):
        user_db = User.get_by_email(request.form['email'])
        # User / email does not exist in DB or incorrect password
        if not user_db or not bcrypt.check_password_hash(user_db.password, request.form['password']):
            flash("Invalid Email/Password", 'email')
            return redirect("/")

        session['user_id'] = user_db.id
        session['user_name'] = f"{user_db.first_name } {user_db.last_name }"
        return redirect("/dashboard")

    return redirect("/")    


# Logout Button Click Route
@app.route('/users/logout')          
def logout_user():
    print("********** User Controller - logout_user() ")
    session.clear()

    return redirect("/")




