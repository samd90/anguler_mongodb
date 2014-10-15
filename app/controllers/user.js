function UserCtrl($scope, User) {

    $scope.users = User.query();
    $scope.isForm = false;

    $scope.edit = function(id) {
    	$scope.user = User.get({ id: id });
    	$scope.isForm = true;
    };

    $scope.save = function() {

        $scope.user.$save({ id: $scope.user._id }, function() {
            $scope.users = User.query();
        });

    	$scope.isForm = false;
    };

    $scope.cancel = function() {
    	$scope.isForm = false;
    };

    $scope.delete = function(id) {

		User.delete({ id: id }, function() {
			// Refresh users
			 $scope.users = User.query();
			alert('User was removed.');
		});

    	$scope.isForm = false;
    };

}