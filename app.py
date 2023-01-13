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
# create precipitation route
@app.route("/api/v1.0/adoptable_by_state")
def adoptable_by_state():
    # Create the session link
    session = Session(engine)

    query = session.execute("select distinct a.state, coordinates, b.cats, c.small_and_furry, d.rabbits, e.dogs, f.birds,g.total_pets, a.state_name from adoptees a left join (select count(id) cats, state from adoptees where type = 'Cat' group by state) b on a.state = b.state left join (select count(id) small_and_furry, state from adoptees where type = 'Small & Furry' group by state) c on a.state = c.state left join (select count(id) rabbits, state from adoptees where type = 'Rabbit' group by state) d on a.state = d.state left join (select count(id) dogs, state from adoptees where type = 'Dog' group by state) e on a.state = e.state left join (select count(id) birds, state from adoptees where type = 'Bird' group by state)f  on a.state = f.state left join(select count(id) total_pets, state from adoptees group by state)g ON a.state = g.state").all()

    session.close()
    
    query_list = []
    counter = 0
    for x in query:
        r= {}
        r['state'] = {'state':x[0], 'state_name':x[8]}
        r['coordinates'] = x[1]
        r['types'] = {'cats':x[2],'dogs':x[5], 'small_and_furry':x[3], 'rabbits':x[4], 'birds':x[6], 'total_pets':x[7] }
            

        query_list.append(r)
        
    return jsonify(query_list)







# @app.route('Velocity')
# @app.route('Leaflet')
# @app.route('Breeds')
# @app.route('Histogram')
# @app.route('Time to Adopt')
# @app.route('Im Feelin Lucky')
######################################################
# create count route
@app.route("/api/v1.0/count")
def adoptable_by_state():
    # Create the session link
    session = Session(engine)

    query = session.execute("").all()

    session.close()
    
    query_list = []
    counter = 0
    for x in query:
        r= {}
        r['state'] = {'state':x[0], 'state_name':x[8]}
        r['coordinates'] = x[1]
        r['types'] = {'cats':x[2],'dogs':x[5], 'small_and_furry':x[3], 'rabbits':x[4], 'birds':x[6], 'total_pets':x[7] }
            

        query_list.append(r)
        
    return jsonify(query_list)

##########################################################
#run the app
if __name__ == "__main__":
    app.run(debug=True)