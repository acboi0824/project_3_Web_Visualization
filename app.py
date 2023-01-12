# import dependencies
import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template, redirect

###################################
# Database Setup
engine = create_engine("postgresql://postgres:2022@localhost/petfriends")

# Reflect an hawaii database and tables
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save reference of the tables
# adoptees = Base.classes.adoptees
# index_table does exist for other data

################################
session = Session(engine)

# insert query for visualizations here?

session.close()
################################

# Create an app
app = Flask(__name__)

################################
# Flask Routes
# Define what to do when user hits the index route
@app.route("/")
def home():
    return render_template('home.html')

######################################################

# @app.route('Velocity')
# @app.route('Leaflet')
# @app.route('Breeds')
# @app.route('Histogram')
# @app.route('Time to Adopt')
# @app.route('Im Feelin Lucky')


##########################################################
#run the app
if __name__ == "__main__":
    app.run(debug=True)