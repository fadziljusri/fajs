from flask import Flask
# from flask_compress import Compress

app = Flask("fjs", static_folder='static', static_url_path='')
# app.config.from_object('settings')
# Compress(app)

# def global_function():
#     return "Global"

# from _fjs_.views import views