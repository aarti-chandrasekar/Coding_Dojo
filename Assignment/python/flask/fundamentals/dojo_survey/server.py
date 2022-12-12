from flask import Flask, render_template, session, redirect, request  

app = Flask(__name__)    
app.secret_key = 'abc123###4565&&&'

@app.route('/')          
def landing_page():
    session.clear()
    return render_template("index.html")

@app.route('/submit_survey', methods=['POST'])          
def submit_survey():
    print("********** " + str(request.form))
    session['name'] = request.form['name']
    session['sex'] = request.form['sex'] if 'sex' in request.form else ''
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    session['understand'] = 'true' if 'understand' in request.form else 'false'
    return redirect("/result")

@app.route('/result')          
def result():
    return render_template("result.html")



    

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
