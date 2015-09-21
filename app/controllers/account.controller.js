app.controller('accountController', function ($scope, $http, $location, baseUrl) {

    $http.get(baseUrl + 'app/data/accounts.json').success(function (data) {
        $scope.accounts = data;
    });

    $scope.response = null;

    $scope.signIn = function (user) {
        accounts();

        angular.forEach($scope.accounts, function (data) {
            if (data.password === user.password) {
                if (data.type === 'admin') {
                    $location.path('app/view/admin');
                } else if (data.type === 'user') {
                    $location.path('app/view/admin');
                }
            } else {
                $location.path('student_lounge');
                $scope.response = 'Login failed';
            }
        });
    };

    $scope.signUp = function (user) {
        accounts();

        $scope.accounts.push({
            id: $scope.accounts.length + 1,
            name: user.userName,
            email: user.email,
            password: user.password
        });


    };

    accounts = function () {
        return $scope.accounts;
    };

    accounts();
});