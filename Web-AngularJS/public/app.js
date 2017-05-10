angular.module('skeletonApp', []);

angular.module('skeletonApp')
  .controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.executerTraitement = function() {
      $scope.retourAffichage = "Texte modifié par le code";
    };
  }]);

