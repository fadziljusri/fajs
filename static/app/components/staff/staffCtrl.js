(() => {
    'use strict';
    angular
        .module('staff.controller', ['app.services'])
        .controller('StaffCtrl', StaffCtrl);

    function StaffCtrl($scope, services) {
        console.log("%c staff ctrl", "font-size:1rem; color:#42a5f5");
        $scope.r = Math.random();
        services.carbon();
    } // end StaffCtrl
})();