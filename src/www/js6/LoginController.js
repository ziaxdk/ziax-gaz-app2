"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var LoginController = (function () {
  function LoginController($scope) {
    _classCallCheck(this, LoginController);

    this.scope = $scope;
    this.scope.f = {};
    // $scope.f = {};
    // $scope.submitForm = function() {
    //   if ($scope.theForm.$invalid) return;
    //   console.log('submit', $scope.f);
    // };
  }

  _prototypeProperties(LoginController, null, {
    submitForm: {
      value: function submitForm() {
        console.log("submitForm");
      },
      writable: true,
      configurable: true
    }
  });

  return LoginController;
})();

exports.LoginController = LoginController;
Object.defineProperty(exports, "__esModule", {
  value: true
});