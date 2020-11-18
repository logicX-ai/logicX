from flask import Flask,request,jsonify
import json
from flask_cors import CORS,cross_origin
from flask import request
import time
import pandas as pd
from firebase_admin import credentials, firestore, initialize_app
from functions.foo import bar


app=Flask(__name__)

CORS(app)




@app.route('/', methods = ['POST'])
def index():
    

    if request.method == 'GET':
        return "Error: wrong request buddy!"


    if request.method == 'POST':
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




if __name__=="__main__":
    app.run(host='127.0.0.1' , port=5000,debug = True)    