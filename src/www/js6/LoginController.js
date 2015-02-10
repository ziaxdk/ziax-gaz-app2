"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var LoginController = (function () {
  function LoginController($scope, RestService) {
    _classCallCheck(this, LoginController);

    this.scope = $scope;
    this.scope.f = {};
    this.RestService = RestService;
  }

  _prototypeProperties(LoginController, null, {
    submitForm: {
      value: function submitForm() {
        var _this = this;
        // this.scope.modal.closeModal();
        console.log(this.scope.$parent);
        this.RestService.authorize(this.scope.f.email, this.scope.f.password).then(function (arg) {
          _this.scope.$emit("authenticate_ok", arg.data);
        });
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