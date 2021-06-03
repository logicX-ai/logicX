from logicx import logicx
from flask_cors import CORS

CORS(logicx)

if __name__=="__main__":
    logicx.run(host='127.0.0.1' , port=5000,debug = True)    