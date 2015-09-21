app.constant('baseUrl', 'http://localhost/Know_n_Go/');

app.controller('schoolController', function ($scope, $http, $location, baseUrl) {

    $http.get(baseUrl + 'app/data/schools.json').success(function (data) {
        $scope.schools = data;
    });

    $http.get(baseUrl + 'app/data/courses.json').success(function (data) {
        $scope.courses = data;
    });

    $http.get(baseUrl + 'app/data/news.json').success(function (data) {
        $scope.news = data;
    });

    actionID = function () {
        $scope.actionID = null;
    };

    $scope.displaySchool = function (id) {
        actionID();
        $scope.actionID = id;
        $location.path('/school_details');
    };

    $scope.displayCourse = function (id) {
        actionID();
        $scope.actionID = id;

        if (id) {
            $location.path('course_details');
        }
    };

    $scope.getSchool = function (id) {
        schools();
        var result = [];

        angular.forEach($scope.schools, function (data) {
            if (data.id === 1) {
                result.push(data);
            }
        });
        return result;
    };

    $scope.getCourse = function (id) {
        courses();
        var result = [];

        angular.forEach($scope.courses, function (data) {
            if (data.id === 1) {
                result.push(data);
            }
        });
        return result;
    };

    $scope.displayNews = function (id) {
        alert(id);
    };

    schools = function () {
        return $scope.schools;
    };

    courses = function () {
        return $scope.courses;
    };

    news = function () {
        return $scope.news;
    };

    schools();
    courses();
    news();
    actionID();
});