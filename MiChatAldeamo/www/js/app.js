// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('MiChat', ['ionic'])

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

     .state('gsm',
    {
        cache: false,
        url: '/gsm',
        templateUrl: 'templates/gsm.html',
        controller: 'GsmCtrl'
    })

    .state('pin',
    {
        cache: false,
        url: '/pin',
        templateUrl: 'templates/pin.html',
        controller: "PinCtrl"
    })

      .state('suscrito',
    {
        cache: false,
        url: '/suscrito',
        templateUrl: 'templates/suscrito.html'
    })
    .state('app', {
        cache: false,
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    })

    .state('app.chat', {
        cache: false,
        url: '/chat',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat.html',
                controller: 'ChatCtrl'
            }
        }
    })
    .state('app.profile', {
        cache: false,
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })
    .state('app.avatar', {
        cache: false,
        url: '/avatar',
        views: {
            'menuContent': {
                templateUrl: 'templates/avatar.html',
                controller: 'AvatarCtrl'
            }
        }
    })

     .state('app.interests', {
         cache: false,
         url: '/interests',
         views: {
             'menuContent': {
                 templateUrl: 'templates/interests.html',
                 controller: 'InterestsCtrl'
             }
         }
     })

    .state('app.help', {
        cache: false,
        url: '/help',
        views: {
            'menuContent': {
                templateUrl: 'templates/help.html',
                controller: 'HelpCtrl'
            }
        }
    })
     .state('app.terms', {
         cache: false,
         url: '/terms',
         views: {
             'menuContent': {
                 templateUrl: 'templates/terms.html',
                 controller: 'TermsCtrl'
             }
         }
     })

     .state('app.faq', {
         cache: false,
         url: '/faq',
         views: {
             'menuContent': {
                 templateUrl: 'templates/faq.html',
                 controller: 'FaqCtrl'
             }
         }
     })

     .state('app.config', {
         cache: false,
         url: '/config',
         views: {
             'menuContent': {
                 templateUrl: 'templates/config.html',
                 controller: 'ConfigCtrl'
             }
         }
     })


    //.state('app.browse', {
    //    url: '/browse',
    //    views: {
    //      'menuContent': {
    //        templateUrl: 'templates/browse.html'
    //      }
    //    }
    //  })
    //  .state('app.playlists', {
    //    url: '/playlists',
    //    views: {
    //      'menuContent': {
    //        templateUrl: 'templates/playlists.html',
    //        controller: 'PlaylistsCtrl'
    //      }
    //    }
    //  })

    //.state('app.single', {
    //  url: '/playlists/:playlistId',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/playlist.html',
    //      controller: 'PlaylistCtrl'
    //    }
    //  }
    //});


    $urlRouterProvider.otherwise('/gsm');
});
