import os
# import sys
# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import random

from flask import render_template, Blueprint
from flask_script import Manager, Server
from flask_assets import Environment, Bundle, ManageAssets

from server import app

@app.route('/')
def index():
    r = random.randint(11111111,99999999)
    return render_template('index.debug.html', r="%08d" % r)

# blueprint
node_modules = Blueprint('node_modules', __name__, static_url_path='/node_modules', static_folder='node_modules')
app.register_blueprint(node_modules)

css = Blueprint('css', __name__, static_url_path='/css', static_folder='css')
app.register_blueprint(css)

# flask assets
assets = Environment(app)
bundles = {
    'js_vendor': Bundle(
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
        filters='jsmin', output='scripts/vendor.min.js'
    ),
 
    'js_app': Bundle(
        'app/app.module.js',
        'app/app.routes.js',
        'app/app.services.js',

        'app/components/pages/login/loginCtrl.js',
        'app/components/pages/register/registerCtrl.js',
        'app/components/staff/staffCtrl.js',

        filters='jsmin', output='scripts/app.min.js'
    ),

    'css_vendor': Bundle(
        'vendor/carbon.min.css',
        filters="cssmin", output='styles/vendor.min.css'
    ),

    'css_main': Bundle(
        'css/main.css',
        filters="cssmin", output='styles/main.min.css'
    )
}
assets.register(bundles)
assets.init_app(app)
assets.debug = True

manager = Manager(app)

# ./manage.py assets ['build', 'watch', 'clean', 'check']
manager.add_command("assets", ManageAssets(assets))

manager.add_command("runserver", Server(
    use_debugger=True,
    use_reloader=True,
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 1234))
)
)

if __name__ == '__main__':
    manager.run()