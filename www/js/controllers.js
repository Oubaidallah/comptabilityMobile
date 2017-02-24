angular.module('starter')

.controller('AppCtrl', function ($scope, $state) {
    $scope.goUpload = function () { $state.go("upload"); }
})

.controller('Upload', function ($scope, $state) {

})