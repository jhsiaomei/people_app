/* global angular */
(function() {
  'use strict';
  angular.module('app').controller('peopleCtrl', function($scope) {
    $scope.bios = [
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
    

    window.$scope = $scope;
  });
})();