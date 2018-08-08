(() => {
    'use strict';
    angular
        .module('app.routers', [])
        .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
            $locationProvider.hashPrefix('');
            let r = Math.random();

            $urlRouterProvider.when('/s', '/s/neworder');
            $stateProvider
                .state('staff', {
                    // abstract: true,
                    url: '/s',
                    templateUrl: `app/components/staff/staffView.html?r=${r}`,
                    controller: 'StaffCtrl'
                })
                .state('neworder', {
                    url: '/neworder',
                    parent: 'staff',
                    templateUrl: `app/components/staff/neworder/neworderView.html?r=${r}`,
                })
                .state('history', {
                    url: '/history',
                    parent: 'staff',
                    templateUrl: `app/components/staff/history/historyView.html?r=${r}`,
                })
                // pages
                .state('login', {
                    url: '/login',
                    templateUrl: `app/components/pages/login/loginView.html?r=${r}`,
                    controller: 'LoginCtrl'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: `app/components/pages/register/registerView.html?r=${r}`,
                    controller: 'RegisterCtrl'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: `app/components/pages/404/404View.html?r=${r}`,
                })
                .state('500', {
                    url: '/500',
                    templateUrl: `app/components/pages/500/500View.html?r=${r}`,
                })

            $urlRouterProvider.otherwise('/s');
        });
})();