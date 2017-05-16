angular.module('smpd', ['ngRoute','ngResource','ngAnimate'])

//contrle de todas imagens e controle direto de 
//qualquer modificação referente a pastas
.constant('IMAGES', {
    tipo:'.jpg',
    pasta:'image/',
    
    dia5: '05Sexta_1ac',
    dia6: '06Sabado_1ac',
    dia7: '07Domingo_1ac',
    dia8: '08Segunda_1ac',
    dia13:'13Campeas_2ac',
    
    dia502: '05Sexta_2ac',
    dia602: '06Sabado_2ac',
    dia702: '07Domingo_2ac',
    dia802: '08Segunda_2ac',
    dia1302:'13Campeas_2ac'
})

.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
    
      when('/5', {
        templateUrl: 'views/fd.html',
        controller:"cd5",
      }).
      when('/6', {
        templateUrl: 'views/fd.html',
        controller:"cd5"
      }).
      when('/7', {
        templateUrl: 'views/fd.html',
        controller:"cd5"
      }).
      when('/8', {
        templateUrl: 'views/fd.html',
        controller:"cd5"
      }).
      when('/13', {
        templateUrl: 'views/fd.html',
        controller:"cd5"
      }).
      when('/formulario', {
        templateUrl: 'views/formulario.html'
      }).
      when('/', {
        templateUrl: 'views/list.html',
        controller:"cdlista"
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);