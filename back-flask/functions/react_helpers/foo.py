import pandas as pd
import pyrebase

def bar():
    return 'hey everyone!'



def handle_user_data(requestX):
   
    req_json_data = requestX.get_json(force=True)
    dataset_name = req_json_data[1]['Dataset_Name']
    print(dataset_name)
    user_uploaded_data = pd.DataFrame([req_json_data[0]['data'][x]['data'] for x in range(len(req_json_data[0]['data']))])
    user_uploaded_data.columns = user_uploaded_data.iloc[0]
    user_uploaded_data = user_uploaded_data.reindex(user_uploaded_data.index.drop(0)).reset_index(drop=True)
    user_uploaded_data.columns.name = None
    dff = user_uploaded_data.to_json(orient='records')

    config =  {
        'apiKey': "AIzaSyCYygfIQsiF7jKTDTRZLu8EUL0WvTNMJbg",
        'authDomain': "logic-af841.firebaseapp.com",
        'databaseURL': "https://logic-af841.firebaseio.com",
        'projectId': "logic-af841",
        'storageBucket': "logic-af841.appspot.com",
        'messagingSenderId': "945457650098",
        'appId': "1:945457650098:web:baefeb5ea8d55798236cab",
        'measurementId': "G-6WY3MG2PGG"
        };


    firebase = pyrebase.initialize_app(config)
    db = firebase.database()

    db.child("user_content").child(dataset_name).child('datasets').push(dff)
    #print(user_uploaded_data)
    return 'returning'    