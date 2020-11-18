from flask import Flask,request,jsonify
import json
from flask_cors import CORS,cross_origin
from flask import request
import time
import pandas as pd
from firebase_admin import credentials, firestore, initialize_app
from functions.react_helpers.foo import bar


app=Flask(__name__)

@app.route('/', methods = ['POST', 'GET'])
def index():
    

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



@app.route('/upload_user_data', methods = ['POST'])
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




