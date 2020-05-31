import * as angular from 'angular';
import 'angular-route';

import {downgradedAngularAppModule, downgradedAngularAppModuleTests} from '../../angular';

import { angularjsUserModule } from '../user/user.module.ajs'

import { configRoutes } from './app.routes.config.ajs';
import { ajsAppComponent } from './app.component.ajs';
import { ajsAppServiceFactory } from './app.service.ajs';
import {ajsUserComponent} from "../user/user.component.ajs";

export const angularjsAppModule = 'ajs-app-module';
export const angularjsAppModuleTests = 'ajs-app-module-tests';

const angularJsModule = angular
    .module(angularjsAppModule, [
        // vendor
        'ngRoute',

        // app
        angularjsUserModule,

        // downgrade
        downgradedAngularAppModule.name
    ])
    // force Angular initialization so that we can use Angular injectables in Angular JS
    .run(['$location', function($location) { $location.path('/angular'); }])
    .config(configRoutes)
    .factory(ajsAppServiceFactory[0] as any, ajsAppServiceFactory[1] as any)
    .component(ajsAppComponent[0] as any, ajsAppComponent[1] as any)
    .component(ajsUserComponent[0] as any, ajsUserComponent[1] as any);

const moduleForTests = angular
    .module(angularjsAppModuleTests, [
        // vendor
        'ngRoute',

        // app
        angularjsUserModule,

        // downgrade
        downgradedAngularAppModuleTests.name
    ])
    // force Angular initialization so that we can use Angular injectables in Angular JS
    .run(['$location', function($location) { $location.path('/angular'); }])
    .config(configRoutes)
    .factory(ajsAppServiceFactory[0] as any, ajsAppServiceFactory[1] as any)
    .component(ajsAppComponent[0] as any, ajsAppComponent[1] as any)
    .component(ajsUserComponent[0] as any, ajsUserComponent[1] as any);

export default function() {
    return angularJsModule;
};

export function getModuleForTests() {
    return moduleForTests;
}

  
