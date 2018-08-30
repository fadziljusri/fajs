from flask import Flask
# from flask_compress import Compress

app = Flask("fajs", static_folder='static', static_url_path='')
# app.config.from_object('settings')
# Compress(app)

# def global_function():
#     return "Global"

# from server.views import views