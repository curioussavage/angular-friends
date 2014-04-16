

angular.module("angular-friends").controller('FriendController', function($scope){
        //$scope.test = "hello world";

        $.getJSON("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json",function(data){
            $scope.$apply(function(){        //  need to call apply so angular knows to apply this stuff to view
                $scope.friends = data.results;
            });


        } )

})




