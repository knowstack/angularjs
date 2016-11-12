(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.message = "";
  $scope.userEntry = "";

  $scope.checkIfTooMuch = function () {
    // $scope.message = "Yaakov 1";
    $scope.message = evaluateLunchString($scope.userEntry);
  };

  function remove(arr, what) {
      var found = arr.indexOf(what);

      while (found !== -1) {
          arr.splice(found, 1);
          found = arr.indexOf(what);
      }
  }

  function evaluateLunchString(string){
    console.log(string);
    if(string.length == 0){
      return "Please enter data first";
    }

    var lunchItems = string.split(',');
    console.log(lunchItems);
    console.log(lunchItems.length);
    remove(lunchItems,"");
    console.log(lunchItems.length);
    if (lunchItems.length <= 3){
      return "Enjoy!";
    }
    else {
      return "Too Much!";
    }
  }
}


})();
