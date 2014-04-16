

angular.module("angular-friends").controller('FriendController', function($scope, $http){
        //$scope.test = "hello world";
    $http({method: "get", url: "https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json"}).success(function(data){
        $scope.friends = data.results;
    })

    $scope.searchterm;

})




