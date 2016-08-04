angular.module('app.routes', [])

        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
                    .state('posts', {
                        url: '/posts',
                        templateUrl: 'templates/all-posts.html',
                        controller: 'postsCtrl'
                    })

                    .state('show-post', {
                        url: '/show-post/:post_id',
                        templateUrl: 'templates/show-post.html',
                        controller: 'postDetailCtrl'
                    })


                    .state('login', {
                        url: '/log-in',
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    })

                    .state('signup', {
                        url: '/sign-up',
                        templateUrl: 'templates/signup.html',
                        controller: 'signupCtrl'
                    })

            $urlRouterProvider.otherwise('/posts')



        });