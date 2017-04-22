angular.module('starbucks').controller('paymentCtrl', [ '$rootScope', '$scope', '$http', '$state', function($rootScope, $scope, $http, $state) {
	$scope.confirmOrder = function(){
		$http({
			method : "POST",
			url : '/api/order/' + $rootScope.order.orderId + '/pay'
		}).success(function(response) {
			console.log('paid ' + response);
			alert('Paid Successfully');
			$rootScope.orderItems = "";
			$state.go('home');

		}).error(function(err) {
			console.log(err);
			alert('Error Processing Payment');
		});
	}
}]);