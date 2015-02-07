// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('the-gaz-app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaGeolocation, $cordovaStatusbar, $cordovaVibration) {
  $ionicPlatform.ready(function() {


    var watchOptions = {
      frequency : 1000,
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        // error
      },
      function(position) {
//        var lat  = position.coords.latitude;
  //      var long = position.coords.longitude;
    //    alert (lat + ', ' + long);
    });


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    //$cordovaStatusbar.style(3);
    //$cordovaStatusbar.styleColor('black');
    //$cordovaStatusbar.styleHex('#f00');
    $cordovaStatusbar.overlaysWebView(true);

    $cordovaVibration.vibrate(20);
    console.log('run complete');
  });
})
.controller('LoginController', function($scope) {
  $scope.f = {};
  $scope.submitForm = function() {
    if ($scope.theForm.$invalid) return;
    console.log('submit', $scope.f);
  };

})
.controller('RootController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('htmls/login.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    $scope.$on('modal.hidden', function() {
    });
    $scope.$on('modal.removed', function() {
    });
});