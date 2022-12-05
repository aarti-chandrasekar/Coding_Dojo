from flask import Flask, render_template  

app = Flask(__name__)    
@app.route('/')          
@app.route('/play')          
@app.route('/play/<times>')          
@app.route('/play/<times>/<colour>')          
def display_box(times=3, colour="skyblue"):
    return render_template("index.html", times=times, colour=colour)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
