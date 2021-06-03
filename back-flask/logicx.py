from flask import Flask,request,jsonify
import json
from flask_cors import CORS,cross_origin
from flask import request
import time
import pandas as pd
#from firebase_admin import credentials, firestore, initialize_app
from functions.react_helpers.datahandling import handle_user_data, dataset_names
from pyrebase import pyrebase
from flask import jsonify


logicx =Flask(__name__)

config = {
      "apiKey": "AIzaSyBdD0laAl1SKi5XfNgf8KlaNJ7snPlP1dI",
    "authDomain": "logicxai-f7b55.firebaseapp.com",
    "databaseURL": "https://logicxai-f7b55-default-rtdb.firebaseio.com/",
    "projectId": "logicxai-f7b55",
    "storageBucket": "logicxai-f7b55.appspot.com",
    "messagingSenderId": "101192151391",
    "appId": "1:101192151391:web:79485e8235b774141606ea",
    "measurementId": "G-RCD9YMY5LS",
    "serviceAccount": "C:/Users/randy/logicX/back-flask/key.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

@logicx.route('/', methods = ['POST', 'GET'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def index():
    

    if request.method == 'GET':
        return "Error: wrong request buddy!"

    if request.method == 'POST':
        return handle_user_data(request)
    
    else:
        print('WHICH ONE IS IT')







@logicx.route('/two', methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def two():
    

    if request.method == 'GET':
       
        list_data = dataset_names("datasets")
        print(list_data)

    
        return jsonify(list_data)


    else:
        print("NOT GET OPTIONS")




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

