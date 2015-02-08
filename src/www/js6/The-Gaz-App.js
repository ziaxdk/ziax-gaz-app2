"use strict";

//import { MainController } from './MainController';
var RootController = require("./RootController").RootController;
var LoginController = require("./LoginController").LoginController;
var Run = require("./Run").Run;


angular.module("TheGazApp", ["ionic", "ngCordova"]).controller("RootController", RootController).controller("LoginController", LoginController).run(Run);