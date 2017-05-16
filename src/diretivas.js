angular.module('smpd')

.directive('menu',function(){
    return{
        templateUrl:"views/menu.html",
        replace:true,
        transclude:true,
        restrict:'AE',
    };
})         
.directive('item',function(){
    return{
        template:"<li><a ng-href = '{{href}}' ng-transclude></a></li>",
        replace:true,
        restrict:'AE',
        transclude:true,
        scope:{
            href:"@",
        }
    };
})
.directive('dropdown',function(){
    return{
        template:
        "<li>"+
            "<a class = 'dropdown-toggle' data-toggle = 'dropdown' ng-bind='nome'>"+
               "<b class = 'caret'></b>"+
            "</a>"+
            "<ul class = 'dropdown-menu' ng-transclude></ul>"+
        "</li>"
        ,
        replace:true,
        restrict:'AE',
        transclude:true,
        scope:{
            nome:"@",
        },
        link:function(scope,element,attrs,ctrl, transclude){
            element.hover(function() {
               element.addClass("open");
            }, function() {
              element.removeClass("open");
            });
        }
    };
}) 
.directive('smpdPanel',function(){
    return{
        template:"<div class='panel panel-success col-xs-6'>"+
        "<h4 class='panel-heading'><i class='fa fa-wheelchair'></i>{{::nome}}</h4>"+
        "<div class='panel-body' style='padding-top:0'>"+
        "<span ng-if='nomea'>acompanhante: {{::nomea}}<br></span>"+
        "<span ng-if='nomeb'>acompanhante: {{::nomeb}}<br></span>"+
        
        "Deficiencia:"+
        "<span ng-if='def1' class='label label-default' ng-bind='def1'></span>"+
        "<span ng-if='def2' class='label label-primary' ng-bind='def2'></span>"+
        "<span ng-if='def3' class='label label-success' ng-bind='def3'></span>"+
        "<span ng-if='def4' class='label label-info' ng-bind='def4'></span>"+
        "<span ng-if='def5' class='label label-danger' ng-bind='def5'></span>"+
        "<span ng-if='def6' class='label label-warning' ng-bind='def6'></span>"+
        
        "<br>Desfile:"+
        "<span ng-if='acesso' class='label label-success' ng-bind='acesso'></span>"+
        "<span ng-if='especial' class='label label-info' ng-bind='especial'> </span>"+
        "<span ng-if='dia1' class='label label-success' ng-bind='dia1'></span>"+
        "<span ng-if='dia2' class='label label-success' ng-bind='dia2'> </span>"+
        "<span ng-if='dia3' class='label label-info' ng-bind='dia3'></span>"+
        "<span ng-if='dia4' class='label label-info' ng-bind='dia4'></span>"+
        "<span ng-if='dia5' class='label label-info' ng-bind='dia5'></span>"+
        
        
        
        
        "</div></div>",
        replace:true,
        restrict:'E',
       scope:{
            nome:"@",
            nomea:"@",
            nomeb:"@",
            def1:"@",
            def2:"@",
            def3:"@",
            def4:"@",
            def5:"@",
            def6:"@",
            
            acesso:"@",
            especial:"@",
            
            
            dia1:"@",
            dia2:"@",
            dia3:"@",
            dia4:"@",
            dia5:"@",
            
        }
    };
})
.directive('conviteimagem',function(){
    return{
        template:"<img class='thumb'>",
        replace:true,
        restrict:'E',
        scope:{
            src:"@"
        }
    };
})
.directive('convitenome',function(){
    return{
        template:"<div class='nome'><ng-transclude></ng-transclude></div>",
        replace:true,
        restrict:'E',
        transclude:true,
    };
})