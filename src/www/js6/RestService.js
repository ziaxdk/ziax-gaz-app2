"use strict";

var _tailCall = (function () { function Tail(func, args, context) { this.func = func; this.args = args; this.context = context; } var isRunning = false; return function (func, args, context) { var result = new Tail(func, args, context); if (!isRunning) { isRunning = true; do { result = result.func.apply(result.context, result.args); } while (result instanceof Tail); isRunning = false; } return result; }; })();

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RestService = (function () {
  function RestService($http) {
    _classCallCheck(this, RestService);

    this.$http = $http;
    this.host = "https://s.ziax.dk/api/";
  }

  _prototypeProperties(RestService, null, {
    authorize: {
      value: function authorize(uid, lastname) {
        var _temp;
        // console.log('authorize', uid, lastname);
        return _tailCall((_temp = this.$http).post, [this.host + "appauth", { uid: uid, lastname: lastname }], _temp);
      },
      writable: true,
      configurable: true
    },
    search: {
      value: function search() {
        console.log("searching...");
      },
      writable: true,
      configurable: true
    }
  });

  return RestService;
})();

exports.RestService = RestService;
Object.defineProperty(exports, "__esModule", {
  value: true
});