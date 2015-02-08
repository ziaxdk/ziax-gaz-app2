//import { MainController } from './MainController';
import { RootController } from './RootController';
import { LoginController } from './LoginController';
import { Run } from './Run';

angular
    .module('TheGazApp', ['ionic', 'ngCordova'])
    .controller('RootController', RootController)
    .controller('LoginController', LoginController)
    .run(Run);