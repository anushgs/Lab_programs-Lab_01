var app = angular.module("myApp", []);
app.controller("meetingsCtrl", function ($scope, $http) {
  // Github link (json)
  $http
    .get("https://anushgs.github.io/Lab_programs-Lab_01/Json/meetings.json")
    .then(function (response) {
      $scope.meetingsData = response.data.meetings;
    });
});
