function MainController($scope) {
  $scope.name = 'Cernan!';
}

angular
  .module('app')
  .controller('MainController', MainController);
