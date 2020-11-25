from flask import Flask,request,jsonify
import json
from flask_cors import CORS,cross_origin
from flask import request
import time
import pandas as pd
from firebase_admin import credentials, firestore, initialize_app
from functions.react_helpers.foo import bar, handle_user_data
import pyrebase

logicx =Flask(__name__)

config = {
  "apiKey": "AIzaSyBWT7SE8UqumBeDznct3vSV7EnY_t3WToA",
  "authDomain": "logicx-1a606.firebaseapp.com",
  "databaseURL": "https://logicx-1a606.firebaseio.com",
  "storageBucket": "logicx-1a606.appspot.com",
    "serviceAccount": "C:/Users/randy/Desktop/logicX/back-flask/key.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

@logicx.route('/', methods = ['POST', 'GET'])
def index():
    

    if request.method == 'GET':
        return "Error: wrong request buddy!"

    if request.method == 'POST':
        return handle_user_data(request)
    
    else:
        print('WHICH ONE IS IT')

@logicx.route('/getdata', methods = ['POST', 'GET'])
def getdata():

    #getting the docs

    users_ref = db.collection('')
    docs = users_ref.get()
    for doc in docs:
        print('{} => {}'.format(doc.id, doc.to_dict()))
    return "Recorded Printed"
  

@logicx.route('/upload_user_data', methods = ['POST'])
def upload_user_data():
    

    if request.method == 'GET':
        return "Error: wrong request buddy!"

    elif request.method == 'POST':
        variable_info = request.get_json(force=True)
        user_upload_data = pd.DataFrame([variable_info['data'][x]['data'] for x in range(len(variable_info['data']))])
        user_upload_data.columns = user_upload_data.iloc[0]
        user_upload_data = user_upload_data.reindex(user_upload_data.index.drop(0)).reset_index(drop=True)
        user_upload_data.columns.name = None
        print(user_upload_data)
        baz = bar() 
        print(baz)

        
        return ''
    
    else:
        print('WHICH ONE IS IT')

