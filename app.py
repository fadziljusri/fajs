import random

from flask import render_template
from _fjs_ import app


@app.route('/')
def index():
    r = random.randint(11111111, 99999999)
    return render_template('index.html', r="%08d" % r)


if __name__ == '__main__':
    app.run(debug=False, use_reloader=False, host='0.0.0.0')