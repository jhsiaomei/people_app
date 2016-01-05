/* global angular */
(function() {
  'use strict';
  angular.module('app').controller('peopleCtrl', function($scope) {
    $scope.people = [
      {
        name: 'Sally Jones',
        bio: 'Long walks on a beach and short naps in the sand.',
        bioVisible: false
      },
      {
        name: 'Bob Barker',
        bio: 'Retired from a life of television, because he has a face for radio.',
        bioVisible: false
      }
    ];
    
    $scope.toggleBioVisible = function(inputIndex) {
      $scope.people[inputIndex].bioVisible = !$scope.people[inputIndex].bioVisible;
    };

    $scope.addBio = function(inputName, inputBio) {
      if (inputName !== '' && inputBio !== '') {
        $scope.people.push({
          name: inputName,
          bio: inputBio,
          bioVisible: false
        });
        $scope.newName = '';
        $scope.newBio = '';
      };
    };

    $scope.deleteBio = function($index) {
      $scope.people.splice($index, 1);
    };

    window.$scope = $scope;
  });
})();