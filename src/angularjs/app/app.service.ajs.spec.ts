import * as ng from 'angular';
import { angularjsAppModuleTests } from "./app.module.ajs";
import { createAngularJSTestingModule } from "@angular/upgrade/static/testing";
import { AppModule } from "../../angular/app/app.module";
import {UserService} from "../../angular";

describe('#app.service', () => {
    beforeEach(ng.mock.module(createAngularJSTestingModule([AppModule])));
    beforeEach(ng.mock.module(angularjsAppModuleTests));

    it('should be truthy', ng.mock.inject((userService: UserService) => {
       expect(true).toBeTruthy();
    }));

    it('should have access to the HeroesService', ng.mock.inject((userService: UserService) => {
        expect(userService).toBeDefined();
    }));
});
