function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'ExampleCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        })
        .state('GrandesParques', {
            url: '/grandesparques',
            controller: 'ExampleCtrl as home',
            templateUrl: 'grandesparques.html',
            title: 'GrandesParques'
        })
        .state('Jardines', {
            url: '/jardines',
            controller: 'ExampleCtrl as home',
            templateUrl: 'jardines.html',
            title: 'Jardines'
        })
        .state('Rotondas', {
            url: '/rotondas',
            controller: 'ExampleCtrl as home',
            templateUrl: 'rotondas.html',
            title: 'Rotondas'
        })
        .state('Biografia', {
            url: '/bio',
            controller: 'ExampleCtrl as home',
            templateUrl: 'biografia.html',
            title: 'Biografia'
        })
        .state('Contacto', {
            url: '/contacto',
            controller: 'ContactCtrl as contact',
            templateUrl: 'contact.html',
            title: 'Contacto'
        });

    $urlRouterProvider.otherwise('/');

}

export default OnConfig;
