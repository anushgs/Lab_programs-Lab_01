var app = angular.module("myApp", []);
app.controller("meetingsCtrl", function ($scope, $http) {
  // Github link (json)
  $http
    .get("https://anushgs.github.io/Lab_programs-Lab_01/Json/meetings.json")
    .then(function (response) {
      $scope.meetingsData = response.data.meetings;
    });
  $scope.orderMeetingBy = function (x) {
    $scope.myOrderBy = x;
  };
});

app.filter("upperCase", function () {
  return function (input) {
    return titleCase(input);
  };
});

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
