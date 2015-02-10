//import { MainController } from './MainController';
import { RootController } from './RootController';
import { LoginController } from './LoginController';
import { MainController } from './MainController';
import { RestService } from './RestService';
import { Run } from './Run';
import { Config } from './Config';

angular
    .module('TheGazApp', ['ionic', 'ngCordova'])
    .controller('RootController', RootController)
    .controller('LoginController', LoginController)
    .controller('MainController', MainController)
    .service('RestService', RestService)
    .config(Config)
    .run(Run);