import pandas as pd
from pyrebase import pyrebase
import time
import json
import numpy as np
import json
import io
import csv
import os
import sys
import pymongo
client = pymongo.MongoClient("localhost", 27017, tz_aware=True)
db_mongo = client.logicxai


def handle_user_data(requestX):
    start = time.time()
    req_json_data = requestX
    t1 = tuple(req_json_data.files.items())
    t2 = t1


  
    file_name = t2[0][1].filename.split('.')[0]

    f=req_json_data.files['file']
    stream = pd.read_csv(io.StringIO(f.stream.read().decode("UTF8"), newline=None))
    print(stream.head())

    for_mongo_data = stream
    dfff = stream.reset_index().iloc[:50,:2].to_json(orient="records")
    config = {
    "apiKey": "AIzaSyBdD0laAl1SKi5XfNgf8KlaNJ7snPlP1dI",
    "authDomain": "logicxai-f7b55.firebaseapp.com",
    "databaseURL": "https://logicxai-f7b55-default-rtdb.firebaseio.com/",
    "projectId": "logicxai-f7b55",
    "storageBucket": "logicxai-f7b55.appspot.com",
    "messagingSenderId": "101192151391",
    "appId": "1:101192151391:web:79485e8235b774141606ea",
    "measurementId": "G-RCD9YMY5LS"}



    dict = {}
    print ("size: " + str(sys.getsizeof(dfff) / 1024 /1000) + "MB")
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()

    #db.child("user").remove()

    #db.child("users").child("Morty").update({"name": "Mortiest Morty"})
   
    db.child('/user/datasets').child(file_name).child(file_name).set(dfff)
    #rethis = db.child("user").child("datasets").shallow().get().val()
    #print(list(rethis))
    end = time.time()
    print(end - start)  


    # mongo entry

    #aJsonString = json.dumps(dfff.T.to_dict(), default=json_util.default)
    #data2be_sent = json.loads(aJsonString, object_hook=json_util.object_hook)
    print(type(json.loads(dfff)))

    file2 = {'documentname': stream} #{"name": "Mortiest Morty"}

   # file3 = {str(key): str(value) for key, value in file2}
    Send2Mongo = f"db_mongo.whyme.insert_one(file2).inserted_id"
    exec(Send2Mongo)
    return 'returning'    




def dataset_names(username):
    config = {
      "apiKey": "AIzaSyBdD0laAl1SKi5XfNgf8KlaNJ7snPlP1dI",
    "authDomain": "logicxai-f7b55.firebaseapp.com",
    "databaseURL": "https://logicxai-f7b55-default-rtdb.firebaseio.com/",
    "projectId": "logicxai-f7b55",
    "storageBucket": "logicxai-f7b55.appspot.com",
    "messagingSenderId": "101192151391",
    "appId": "1:101192151391:web:79485e8235b774141606ea",
    "measurementId": "G-RCD9YMY5LS"}
    dict = {}
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    rethis = list(db.child("user").child(username).shallow().get().val())
    print(rethis)
    return rethis