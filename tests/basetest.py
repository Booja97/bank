import unittest
import json
from app import app
from database.db import db

class BaseTest(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.db = db.get_db()


    def tearDown(self):
        for collection in self.db.list_collection_names():
            self.db.drop_collection(collection)