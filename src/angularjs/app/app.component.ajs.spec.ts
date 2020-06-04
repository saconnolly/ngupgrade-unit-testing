import {angularjsAppModuleTests} from "./app.module.ajs";
import {clearPlatforms, getUpgradeObjects, testSetup, compileDirective} from "../../test-helpers";

describe('#app.component.ajs', function() {
    let element: any = '<ajs-app></ajs-app>', testingObj;

    describe('tests with helper', () => {
        clearPlatforms();

        beforeEach(done => {
            testSetup(element, [angularjsAppModuleTests]).then(upgrade => {
                testingObj = getUpgradeObjects(upgrade);
                done();
            });
        });

        it('should create component without errors', () => {
            const testElement = compileDirective(testingObj, element);
            expect(testElement).toBeTruthy();
        });

        it('should create component with a span tag', () => {
            const testElement = compileDirective(testingObj, element);
            expect(testElement.html()).toContain('span');
        });

        it('should display Shaun Connolly inside the span tag', () => {
            const testElement = compileDirective(testingObj, element);
            const testSpan = testElement.find('span')[0];
            expect(testSpan.innerHTML).toEqual('Shaun Connolly');
        });
    });
});
