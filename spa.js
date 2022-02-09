angular
  .module("spa", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/meeting", {
        templateUrl: "todaymeeting.html",
        controller: "todaymeetingCntrl",
      })
      .when("/createMeeting", {
        templateUrl: "createMeeting.html",
        controller: "createMeetingCntrl",
      })
      .when("/upcommingMeeting", {
        templateUrl: "upcomingMeeting.html",
        controller: "upcommingMeetingCntrl",
      });
  })
  .controller("todaymeetingCntrl", function ($scope) {
    $scope.message = "Todays meeting";
  })
  .controller("createMeetingCntrl", function ($scope) {
    $scope.message = "Create Meeting";
  })
  .controller("upcommingMeetingCntrl", function ($scope, $http) {
    $scope.message = "Upcoming Meetings Info";
    $http
      .get("https://anushgs.github.io/Lab_programs-Lab_01/Json/meetings.json")
      .then(function (response) {
        $scope.meetingsData = response.data.meetings;
      });
    $scope.orderMeetingBy = function (x) {
      $scope.myOrderBy = x;
    };
  })
  .filter("upperCase", function () {
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
