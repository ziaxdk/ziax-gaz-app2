"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RootController = function RootController($scope, $ionicModal) {
  _classCallCheck(this, RootController);

  $ionicModal.fromTemplateUrl("htmls/login.html", {
    scope: $scope,
    animation: "slide-in-up",
    backdropClickToClose: false
  }).then(function (modal) {
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
};

exports.RootController = RootController;
Object.defineProperty(exports, "__esModule", {
  value: true
});