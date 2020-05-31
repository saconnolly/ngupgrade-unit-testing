export const configRoutes= [
  '$routeProvider', 
  '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider  
      .when('/angularjs', {
        template: '<ajs-app></ajs-app>'
      })
      .when('/angular', {
        template: '<app></app>'
      })
      .otherwise('angularjs');
  }
];
