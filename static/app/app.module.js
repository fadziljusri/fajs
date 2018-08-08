'use strict';

var app = angular.module('fjs', [
    'ui.router',
    'app.routers',
    'app.services',

    'login.controller',
    'register.controller',
    'staff.controller',
]);