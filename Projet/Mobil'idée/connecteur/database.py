from pymongo import MongoClient
from django.conf import settings

HOST = settings.HOST
PORT = settings.PORT
USERNAME = settings.USERNAME
PASSWORD = settings.PASSWORD


def get_db(db_name):
    """Get database provided"""
    client = MongoClient(host=HOST,
                         port=PORT,
                         username=USERNAME,
                         password=PASSWORD
                         )
    db = client[db_name]
    return db


def get_collection(db, collection_name):
    """Get the collection wanted"""
    return db[collection_name]


def get_users():
    """Retrieve users"""
    collection = get_collection(get_db('apidb'), 'Users')
    all_users = list(collection.find({}))
    for user in all_users:
        del user['_id']
    return all_users


def get_user(user_id: int):
    """Retrive the user provided"""
    collection = get_collection(get_db('apidb'), 'Users')
    user = collection.find_one({"id": user_id})
    if (not user):
        raise UserDoNotExist()
    del user['_id']
    return user


