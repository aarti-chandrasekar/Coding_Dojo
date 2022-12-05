from flask import Flask, render_template  

app = Flask(__name__)    
@app.route('/')       
def hello_world():
    return "Hello World"
    
@app.route('/dojo')       
def hello_dojo():
    return "Dojo!"

@app.route('/say/<name>')       
def say_name(name):
    if name.isalpha():
        return "Hi " + name
    else:
        return "Please enter a valid name."


@app.route('/say/<times>/<word>')       
def repeat_word(times, word):
    if word.isalpha() and times.isnumeric():
        return (word + " ") * int(times)
    else:
        return "Please enter a valid number and name."

@app.route('/<anything>')       
def anything(anything):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
