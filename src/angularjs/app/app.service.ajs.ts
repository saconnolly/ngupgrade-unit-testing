import { UserService } from "../../angular";

export const ajsAppServiceFactory = [
  'ajsAppService',
  [
    '$rootScope',
    'userService',
    function ($rootScope, userService) {
      return new AjsAppService($rootScope, userService);
    }
  ]
]

export class AjsAppService {
  constructor(private $rootScope, private userService: UserService) {}

  detectChanges() {
    this.$rootScope.$digest();
  }

  logUser() {
    console.log(this.userService.getUser());
  }
}
