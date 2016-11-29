angular.module('userProfiles').controller('MainController', function ($scope, mainService) {

  $scope.currentPage = 1;

  $scope.getUsers = function () {
    var promise = mainService.getUsers($scope.currentPage);

    promise.then(function (response) {
      $scope.users = response.data.data;
      $scope.totalPages = response.data.total_pages;
    })
  }

  $scope.getUsers();

  $scope.prev = function () {
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.getUsers();
    }
  }
  $scope.next = function () {
    if ($scope.currentPage < $scope.totalPages) {
      $scope.currentPage++;
      $scope.getUsers();
    }
  }

});
