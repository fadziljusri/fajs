# fjs
A Flask AngularJS dashboard boilerplate

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* [Python 3.X](https://www.python.org/downloads/)
* [Nodejs](https://nodejs.org/en/)

### Installing
```
npm install
pip install -r requirements.txt
```

### Running the application (Debug)
```
python manage.py runserver
```

### Managing Assets
Using [Flask-Assets](http://flask-assets.readthedocs.io/en/latest/), all js/css src are put inside **__manage.py__** file.
```
python manage.py assets ['build', 'watch', 'clean', 'check']
```
Files destination path is in **__static__** folder as belows:
* scripts/vendor.min.js
* scripts/app.min.js
* styles/vendor.min.css
* styles/main.min.css

### Running the application
```
python app.py
```

## Credits
* [Mohammed Isa](https://github.com/mohd-isa/carbon) - Bootstrap 4 admin template

## Authors
* Fadzil Jusri