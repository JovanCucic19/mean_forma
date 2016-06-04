(function () {
    'use strict';

    angular
        .module('app')
        .controller('Test.IndexController', Controller);

    function Controller($scope,UserService) {

            // URL API-ja se hvata iz GetAll() funkcije koja se nalazi u user.service
            UserService.GetAll().then(function (data) {
                $scope.user = data;


            });

    }

})();