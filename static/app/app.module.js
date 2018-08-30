'use strict';

var app = angular.module('fajs', [
    'ui.router',
    'app.routers',
    'app.services',

    'login.controller',
    'register.controller',
    'staff.controller',
]);