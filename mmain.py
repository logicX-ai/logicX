
from flask import Flask, render_template
import datetime
import time
from flask import abort, jsonify
# app.py
import datetime
# Required imports
import time
import os
from flask import Flask, request, jsonify, abort, jsonify
from firebase_admin import render_template, credentials, firestore, initialize_app
import pyrebase

app = Flask(__name__)

@app.route('/')

def root():
    dummy_times = [datetime.datetime(2018, 1, 1, 10, 0, 0),
                   datetime.datetime(2018, 1, 2, 10, 30, 0),
                   datetime.datetime(2018, 1, 3, 11, 0, 0),
                   ]
    
    listie = []
    start = time.time()

    for i in range(1000):
        print('hi')
    end = time.time()
    total = (end - start) 
    print(total)
    listie.append(['result', total * 10])
    print(listie)


    return render_template('index.html', times=listie)


@app.errorhandler(404)
# 404, 403, 410, 500
def resource_not_found(e):
    return jsonify(error=str(e)), 404


@app.route('/hi/<userID>')
def gresa(userID):
    return {'hi': userID}







if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_python38_render_template]
