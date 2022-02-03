var app = angular.module('myApp',[]);
app.controller('packagesCtrl',function($scope, $http)
{
    // Github link (json)
    $http.get("https://tenzinyangzom158.github.io/programs/lab/package.json")
    .then(function(response)
    {
        $scope.myData = response.data.package;
        $scope.rowlimit = response.data.length();
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    
});

app.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});

app.filter("dayFilter", function()
{
    return function(input)
    {
        return input + ' Days';
    }
});


app.filter('myNameFilter',function()
{
    return function(input)
    {
        return 'Dr. ' + input;
    }
})