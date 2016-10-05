function orbConfig(
  $locationProvider
, $stateProvider
, $urlRouterProvider
, $mdThemingProvider
, $httpProvider
, OAuthProvider
, OAuthTokenProvider
, uiGmapGoogleMapApiProvider) {
  
  OAuthTokenProvider.configure({
    name: 'orbAuth',
    options: {
      secure: false
    }
  });

  OAuthProvider.configure({
      baseUrl: 'http://localhost:1500',
      clientId: 'T7jyYE1VWfIOus0X',
      clientSecret: '3i4go2tlBbyMnoRW9NUoVaTlPg7GrfsX',
      grantPath: '/oauth/token',
      revokePath: '/oauth/revoke'
  });

	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBMaQ5VLbug_gC8le3UCV_R0blPsNhY0ds',
    });

  //routes
  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('orb', {
    url: "/orb",
    templateUrl: "dist/views/orb.html",
    controller: "OrbController"
  })
  .state('sign', {
    url: "/sign",
    templateUrl: "dist/views/sign.html",
    controller: "SignController"
  })
  .state('about', {
    url: "/about",
    templateUrl: "dist/views/about.html",
  });
  
}

export default orbConfig;