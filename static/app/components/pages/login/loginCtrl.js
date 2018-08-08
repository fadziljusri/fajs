(() => {
    'use strict';
    angular
        .module('login.controller', [])
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $state) {
        console.log("%c login ctrl", "font-size:1rem; color:#42a5f5");
        $scope.l = {
            email: 'test@gmail.com',
            password: 'p@ssw0rd'
        }
        $scope.doLogin = l => {
            console.log(l);
            $state.go('staff');
        }
    } // end LoginCtrl
})();