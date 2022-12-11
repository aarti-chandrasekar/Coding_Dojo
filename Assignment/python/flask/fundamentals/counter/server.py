from flask import Flask, render_template, session, redirect, request  

app = Flask(__name__)    
app.secret_key = 'abc123###4565&&&'

@app.route('/')          
def landing_page():
    cnt = int(session['times']) if 'times' in session else 0
    session['times'] = cnt + 1
    actual_cnt = int(session['actual_times']) if 'actual_times' in session else 0
    session['actual_times'] = actual_cnt + 1

    return render_template("index.html")

@app.route('/increment', methods=['POST'])          
def increment():
    cnt = int(session['times']) if 'times' in session else 0
    session['times'] = cnt + int(request.form['count']) - 1
    return redirect("/")

@app.route('/destroy_session')          
def destroy_session():
    session.pop('actual_times')
    session.pop('times')
    return redirect("/")



    

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
