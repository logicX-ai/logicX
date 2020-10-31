# Extremely simple flask application, will display 'Hello World!' on the screen when you run it
# Access it by running it, then going to whatever port its running on (It'll say which port it's running on).
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'



@app.route('/api/query', methods = ['POST'])
def get_query_from_react():
    data = request.get_json()
    print(data)
    print('f')
    return data

    
if __name__ == '__main__':
    app.run()