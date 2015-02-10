"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RootController = function RootController($scope, $state, $ionicModal) {
  var _this = this;
  _classCallCheck(this, RootController);

  this.scope = $scope;
  this.state = $state;

  $ionicModal.fromTemplateUrl("htmls/login.html", {
    scope: $scope,
    animation: "slide-in-up",
    backdropClickToClose: false
  }).then(function (modal) {
    console.log(modal);
    $scope.modal = modal;
    $scope.modal.show();
  });
  $scope.openModal = function () {
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  $scope.$on("$destroy", function () {
    $scope.modal.remove();
  });
  $scope.$on("modal.hidden", function () {});
  $scope.$on("modal.removed", function () {});

  // submitForm () {
  //   console.log('submitForm');
  //   // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
  //   //   .then(() => {
  //   //     console.log('ok');
  //   //     this.state.go('main');
  //   //   });
  // }
  // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
  //   .then(() => {
  //     console.log('ok');
  //     this.state.go('main');
  //   });


  this.scope.$on("authenticate_ok", function (evt, arg) {
    console.log("authenticate_ok", arg);
    _this.scope.closeModal();
    _this.state.go("main");
  });
};

exports.RootController = RootController;
Object.defineProperty(exports, "__esModule", {
  value: true
});