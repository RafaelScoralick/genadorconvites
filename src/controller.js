angular.module('smpd')
.controller('cd5',function($scope,$http,$location,$filter,IMAGES) {
      
        var meufiltro,image1, image2;
        switch($location.$$path) {
        //com base do caminho, redireciona as imagens e o filtro
    	case '/5':
    		image1 = IMAGES.dia5;
    		image2 = IMAGES.dia502;
    		meufiltro = "fd5";
    		break;
   	    case '/6':
    		image1 = IMAGES.dia6;
    		image2 = IMAGES.dia602;
    		meufiltro = "fd6";
    		break;
        case '/7':
    		image1 = IMAGES.dia7;
    		image2 = IMAGES.dia702;
    		meufiltro = "fd7";
    		break;
   	    case '/8':
    		image1 = IMAGES.dia8;
    		image2 = IMAGES.dia802;
    		meufiltro = "fd8";
    		break;
    	case '/13':
    		image1 = IMAGES.dia13;
    		image2 = IMAGES.dia1302;
    		meufiltro = "fd13";
    		break;
        }
        $scope.indice = function(num){
            //para saber qual a linhas com base no indice
            return parseInt(num / 2);
        };
        $scope.par = function(num){
            //para saber qual a coluna com base no indice
            return (num % 2 == 0)?0:331;
        };
        $scope.image = function(data){
            //retorna as imagens para o card de impressão
            if(typeof data.nomeB == 'undefined'){
                //se não tiver segundo acomanhante
                return IMAGES.pasta+image1+IMAGES.tipo;
            }
            return IMAGES.pasta+image2+IMAGES.tipo;
        };
        $http.get('../data/arquivo.json').then(
            function (data){
            $scope.lista = $filter(meufiltro)(data.data);
        }, function (error){});
})
.controller('cdlista',function($scope,$http) {
        $http.get('../data/arquivo.json').then(function (data){
            $scope.lista = data.data;
        },function (error){});
        $scope.porcento = function(valor){
            return Math.ceil(valor);
        };
})