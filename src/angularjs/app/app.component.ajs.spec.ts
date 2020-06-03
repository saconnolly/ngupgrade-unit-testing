import * as ng from 'angular';
import {angularjsAppModuleTests} from "./app.module.ajs";
import {createAngularJSTestingModule} from "@angular/upgrade/static/testing";
import {AppModule} from "../../angular/app/app.module";

describe('#app.component.ajs', function() {
    let $compile, $rootScope, scope, element;
    beforeEach(() => {
        const directiveStubs = [
            'userDirective'
        ];

        ng.mock.module(angularjsAppModuleTests, function($provide) {
            directiveStubs.forEach(stub => {
                $provide.factory(stub, () => {
                    return {};
                });
            });
        });
    });

    beforeEach(ng.mock.module(createAngularJSTestingModule([AppModule])));
    beforeEach(ng.mock.module(angularjsAppModuleTests));

    beforeEach(inject(function(_$rootScope_, _$compile_) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;

        scope = $rootScope.$new();

        element = ng.element('<ajs-app></ajs-app>');

        $compile(element)(scope);

    }));

    it('should create component without errors', () => {
        expect(element).toBeTruthy();
    });

    it('should create component with a span tag', () => {
        expect(element.html()).toContain('span');
    });
});
