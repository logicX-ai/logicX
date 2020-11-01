from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
import time

app=Flask(__name__)

CORS(app, supports_credentials=True, CORS_SUPPORTS_CREDENTIALS =True)

@app.route('/api/time', methods = ['POST', 'GET'])
@cross_origin(supports_credentials=True)
def index():
    
    



    if request.method == 'GET':
        variable_info = request.json
        print(f'{variable_info} This is GET, flask shows')
        person = {'name': 'GET', 'keytwo': 'GET REQUEST'}
        return jsonify(person)


    if request.method == 'POST':
        variable_info = request.json
        print(f'{variable_info} This is POST, flask receives')
        person = {'name': 'POST', 'keytwo': 'POST REQUEST'}
        return jsonify(person)
    
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