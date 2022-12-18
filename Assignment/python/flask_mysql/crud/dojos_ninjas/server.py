from flask_app import app

from flask_app.controllers.dojo_controller import *
from flask_app.controllers.ninja_controller import *


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
