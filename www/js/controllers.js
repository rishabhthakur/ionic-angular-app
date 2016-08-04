var mainApp = angular.module('app.controllers', []);

mainApp.controller('postsCtrl', ['$scope', '$stateParams', '$http', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
        $scope.posts = [];

        $http.get('http://decoloc.rt.cisinlive.com/api/get_posts/').success(function(response) {
            $scope.posts = response.posts;
            //console.log(response.posts);
        }).error(function(error) {
            console.log('Failed to reload');
        });

    }
]);

mainApp.controller('postDetailCtrl', ['$scope', '$stateParams', '$http', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
        $scope.post = [];

        var post_id = $stateParams.post_id;

        $http.get('http://decoloc.rt.cisinlive.com/api/get_post/?post_id=' + post_id).success(function(response) {
            $scope.post = response.post;
            //console.log(response.post);
        }).error(function(error) {
            console.log('Failed to reload');
        });

    }
]);


mainApp.controller('loginCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
]);

mainApp.controller('signupCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

    }
]);
 