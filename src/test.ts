import * as angularJsModule from './angularjs/app/app.module.ajs';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

angularJsModule.getModuleForTests();
declare const require: any;


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

const context = require.context('./', true, /\.spec.ts$/);
context.keys().map(context);
