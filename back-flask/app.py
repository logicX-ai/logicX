from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
app=Flask(__name__)
CORS(app, support_credentials=True)
@app.route('/api/test', methods=['POST', 'GET','OPTIONS'])
@cross_origin(supports_credentials=True)
def index():
    if(request.method=='POST'):
     some_json=request.get_json()
     return jsonify({"key":some_json})
    else:
        return jsonify({"GET":"GET"})


if __name__=="__main__":
    app.run(host='127.0.0.1' , port=5000)    