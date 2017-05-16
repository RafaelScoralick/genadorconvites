angular.module('smpd')
.filter('fd5',function(){
  return function(input){
     var results = [];
    for(var i in input){
      var name = input[i];
        if(name['acesso'] =='dia5' || name['dia1'] == 'dia5'){
            results.push(name);
        }
    }
    return results;
  };
})
.filter('fd6',function(){
  return function(input){
     var results = [];
    for(var i in input){
      var name = input[i];
        if(name['acesso'] =='dia6' || name['dia2'] == 'dia6'){
            results.push(name);
        }
    }
    return results;
  };
})
.filter('fd7',function(){
  return function(input){
     var results = [];
    for(var i in input){
      var name = input[i];
        if(name['especial'] =='dia7' || name['dia3'] == 'dia7'){
            results.push(name);
        }
    }
    return results;
  };
})
.filter('fd8',function(){
  return function(input){
     var results = [];
    for(var i in input){
      var name = input[i];
        if(name['especial'] =='dia8' || name['dia4'] == 'dia8'){
            results.push(name);
        }
    }
    return results;
  };
})
.filter('fd13',function(){
  return function(input){
     var results = [];
    for(var i in input){
      var name = input[i];
        if(name['especial'] =='dia13' || name['dia5'] == 'dia13'){
            results.push(name);
        }
    }
    return results;
  };
});