(() => {
    'use strict';
    angular
        .module('register.controller', [])
        .controller('RegisterCtrl', RegisterCtrl);

    function RegisterCtrl($scope, $state) {
        console.log("%c register ctrl", "font-size:1rem; color:#42a5f5");
        $scope.r = {
            name: 'test',
            email: 'test@gmail.com',
            password: 'p@ssw0rd',
            rePassword: 'p@ssw0rd'
        }
        $scope.doReg = r => {
            console.log(r);
            $state.go('staff');
        }
    } // end RegisterCtrl
})();