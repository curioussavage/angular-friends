

angular.module("angular-friends").controller('FriendController', function($scope, $http){
        //$scope.test = "hello world";
    $http({method: "get", url: "https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json"}).success(function(data){
        $scope.friends = data.results;
    })


    $scope.search;

    $scope.sortAttr =[
        { val: "name",string:"Name"   }, {val:"friend_count", string:"friends" },{val:"current_location.city", string:"city"},{val:"current_location.state", string:"state"},{val:"current_location.country",string:"country"}
    ];
    $scope.order = "false";

})




