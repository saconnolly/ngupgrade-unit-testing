import { destroyPlatform } from '@angular/core';
import { NgZone, PlatformRef, Type } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./angular/app/app.module";

export function clearPlatforms() {
    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());
}

export function compileDirective (testingObj, element) {
    element = testingObj.compile(element)(testingObj.scope);
    testingObj.scope.$digest();
    return element;
}

export function bootstrap(
    platform: PlatformRef,
    Ng2Module: Type<{}>,
    element: any,
    modsArray: any
) {
    return platform.bootstrapModule(Ng2Module).then(ref => {
        const ngZone = ref.injector.get<NgZone>(NgZone);
        const upgrade = ref.injector.get(UpgradeModule);

        ngZone.run(() => upgrade.bootstrap(element, modsArray));
        return upgrade;
    });
}

export function testSetup(element?, modsToAdd?) {
    const failHardModule: any = ($provide: any) => {
        $provide.value('$exceptionHandler', (err: any) => {
            throw err;
        });
    };
    let modsArray = [failHardModule];
    modsToAdd && modsToAdd.forEach(mod => modsArray.push(mod));
    return bootstrap(platformBrowserDynamic(), AppModule, element || '<div></div>', modsArray);
}

export function getUpgradeObjects(upgrade, scopeToUse?) {
    let rootScope = upgrade.$injector.get('$rootScope');
    let isolateScope = scopeToUse || rootScope.$new();
    let compile = upgrade.$injector.get('$compile');
    return {
        compile: compile,
        scope: isolateScope
    };
}
