"use strict";

function Config($stateProvider, $urlRouterProvider) {
  $stateProvider.state("login", {
    url: "/login",
    templateUrl: "htmls/login-view.html",
    controller: "LoginController"
  }).state("main", {
    url: "/main",
    templateUrl: "htmls/main-view.html",
    controller: "MainController"
  });

  $urlRouterProvider.otherwise("/login");
}
exports.Config = Config;
Object.defineProperty(exports, "__esModule", {
  value: true
});