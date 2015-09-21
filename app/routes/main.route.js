app.config(function ($routeProvider) {
    $routeProvider
            .when('/',
                    {
                        templateUrl: 'app/view/index.html',
                        reloadOnSearch: false
                    })
            .when('/schools',
                    {
                        templateUrl: 'app/view/schools.html',
                        controller: 'schoolController',
                        reloadOnSearch: false
                    })
            .when('/school_details',
                    {
                        templateUrl: 'app/view/school_details.html',
                        controller: 'schoolController',
                        reloadOnSearch: false
                    })
            .when('/student_lounge',
                    {
                        templateUrl: 'app/view/lounge.html',
                        controller: 'accountController',
                        reloadOnSearch: false
                    })
            .when('/course_details',
                    {
                        templateUrl: 'app/view/course_details.html',
                        controller: 'schoolController',
                        reloadOnSearch: false
                    })
            .when('/app/view/admin',
                    {
                        templateUrl: 'app/view/admin/index.html',
                        controller: 'MainController',
                        reloadOnSearch: false
                    });
});