from flask import Flask,request,jsonify
import json
from flask_cors import CORS,cross_origin
from flask import request
import time
import pandas as pd

app=Flask(__name__)

CORS(app)

@app.route('/', methods = ['POST'])
def index():
    

    if request.method == 'GET':
        return "get"


    if request.method == 'POST':
        variable_info = request.get_json(force=True)
        user_upload_data = pd.DataFrame([variable_info['data'][x]['data'] for x in range(len(variable_info['data']))])
        user_upload_data.columns = user_upload_data.iloc[0]
        user_upload_data = user_upload_data.reindex(user_upload_data.index.drop(0)).reset_index(drop=True)
        user_upload_data.columns.name = None
        print(user_upload_data)

        return ''
    
    else:
        print('WHICH ONE IS IT')





@app.route('/hi', methods = ['POST'])
def hi():
    

    if request.method == 'GET':
        variable_info = request.json
        print(f'{variable_info} This is GET, flask shows')
        person = {'name': 'GET', 'keytwo': 'GET REQUEST'}
        return "get"


    if request.method == 'POST':
        variable_info = request.data
        print(variable_info)
        return variable_info
    
    else:
        print('WHICH ONE IS IT')








@app.route('/result', methods = ['POST', 'GET'])
@cross_origin(supports_credentials=True)
def result():
    player_id = request.json
    
    if player_id:
     
       data = get_player(player_id)
       print(data)
       name = str(data['name'][0])
       return jsonify(name)
    else:
        print('whats going on')
    return "No player information is given"


@cross_origin(supports_credentials=True)
@app.route('/api/time', methods = ['POST', 'GET'])
def get_current_time():
    return {'time': time.time()}



if __name__=="__main__":
    app.run(host='127.0.0.1' , port=5000,debug = True)    