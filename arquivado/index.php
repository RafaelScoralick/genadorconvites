<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['nome'])) {
    //cria novo registro;
    $row = array();
    add($row,'nome');
    add($row,'nomeA');
    add($row,'nomeB');
    add($row,'def1');
    add($row,'def2');
    add($row,'def3');
    add($row,'def4');
    add($row,'def5');
    
    add($row,'dia1');//1
    add($row,'dia2');//2
    add($row,'dia3');//3
    add($row,'dia4');//4
    add($row,'dia5');//5
    
    add($row,'acesso');
    add($row,'especial');
    registra($row); //adiciona aos registros
    
  
}
function add(&$row,$campo){
    if(isset($_POST[$campo])){
         $row[$campo] = $_POST[$campo];
    }
}
function converte($json) {
    $result = array();
    foreach($json as $key => $value) {
        $result[$key] = $value;
    }
    return $result;
};

function registra($registro) {
    $arquivo = fopen('data/arquivo.json', 'r'); //abre
    $string = file_get_contents('data/arquivo.json'); //ler
    $json = converte(json_decode($string)); //converte para php
    $json[] = $registro;

    $conteudo = json_encode($json); //converte para json
    fclose($arquivo);
    $arquivo = fopen('data/arquivo.json', 'w+'); //abre
    if(fwrite($arquivo, $conteudo))
        echo "<div class='alert alert-success' role='alert'>Usuário cadastrado com sucesso!</div>";
    fclose($arquivo);
}
?>
<html>
    <head>
        <title>Formulário</title>
        <script type="text/javascript" src="require/jquery.js"></script>
        <script type="text/javascript" src="require/angular.js"></script>
        <script type="text/javascript" src="require/angular-route.js"></script>
        <script type="text/javascript" src="require/angular-resource.js"></script>
        <script type="text/javascript" src="require/angular-animate.js"></script>
        <script type="text/javascript" src="require/bootstrap.js"></script>
        <script type="text/javascript" src="app.js"></script>
    
        <link rel="stylesheet" href="require/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="require/app.css" type="text/css" />
    </head>
    
    <body id='body' ng-app="smpd">
        <div style="padding-top: 2em;"></div>
       <a href="/print"></a>
        <div class="container bs-docs-container" role="main">
            <form name="myform" class="form-horizontal col-md-9"  action="#" method="post" >
                <legend>Carnaval SMPD <strong>2016</strong></legend>
    
    
                <div class="">
                    <div class="">
                        <label for="inputNome" class="control-label ">Nome:</label>
                        <div class="controls">
                            <input class="form-control" placeholder="Nome do Deficiente" type="text" id="inputNome" name="nome" ng-model="nome"autocomplete="off" />
                        </div>
                    </div>
    
                    <div class="">
                        <label for="inputNomeA" class="control-label">Acompanhante:</label>
                        <div class="controls">
                            <input class="form-control" placeholder="Nome do acompanhante" type="text" id="inputNomeA" name="nomeA" ng-model="nomeA"autocomplete="off" />
                        </div>
                    </div>
                    <div class="">
                        <div class="controls">
                            <input type="checkbox" id="liberar" name="liberar" value="liberar" ng-model='liberar'>
                            <label for="liberar" class="control-label">Habilitar 2º Acompanhante?</label>
                        </div>
                    </div>
                    <div class="" ng-if="liberar">
                        <label for="inputNomeB" class="control-label">Acompanhante:</label>
                        <div class="controls">
                            <input class="form-control" placeholder="Nome do segundo acompanhante" type="text" id="inputNomeB" name="nomeB" ng-model="nomeB"autocomplete="off" />
                        </div>
                    </div>
                </div>
    
                <div class="">
                    <div class="">Deficiencia:<br>
                        <label for="radio1" class="control-label btn btn-default btn-mvp">
                            <input type="checkbox" id="radio1" name="def1" value="Física" ng-model='def1'>Física
                        </label>
                        <label for="radio2" class="control-label btn btn-default btn-mvp">
                            <input type="checkbox" id="radio2" name="def2" value="Visual" ng-model='def2'>Visual
                        </label>
                        <label for="radio3" class="control-label btn btn-default btn-mvp">
                            <input type="checkbox" id="radio3" name="def3" value="Auditiva" ng-model='def3'>Auditiva
                        </label>
                        <label for="radio4" class="control-label btn btn-default btn-mvp">
                            <input type="checkbox" id="radio4" name="def4" value="Intelectual" ng-model='def4'>Intelectual
                        </label>
                        <label for="radio5" class="control-label btn btn-default btn-mvp">
                            <input type="checkbox" id="radio5" name="def5" value="Cadeirante" ng-model='def5'>Cadeirante
                        </label>
                    </div>
                </div>
                <div class="">
                    <div ng-if="def5">
                        <div class="">Desfile<br>
                            <label for="check1" class="control-label btn btn-default btn-mvp">
                                <input type="checkbox" id="check1" name="dia1" value="dia5" ng-model='check1'>dia 5
                            </label>
                            <label for="check2" class="control-label btn btn-default btn-mvp">
                                <input type="checkbox" id="check2" name="dia2" value="dia6" ng-model='check2'>dia 6
                            </label>
                            <label for="check3" class="control-label btn btn-default btn-mvp">
                                <input type="checkbox" id="check3" name="dia3" value="dia7" ng-model='check3'>dia 7
                            </label>
                            <label for="check4" class="control-label btn btn-default btn-mvp">
                                <input type="checkbox" id="check4" name="dia4" value="dia8" ng-model='check4'>dia 8
                            </label>
                            <label for="check5" class="control-label btn btn-default btn-mvp">
                                <input type="checkbox" id="check5" name="dia5" value="dia13" ng-model='check5'>dia 13
                            </label>
                        </div>
                    </div>
                    <div ng-if="!def5">
                        <div class="">
                            <div class="">Desfile Grupo de acesso:<br>
                                <label for="dia5" class="control-label btn btn-default btn-mvp">
                                    <input type="radio" id="dia5" name="acesso" value="dia5" ng-model='radio5'>dia 5
                                </label>
                                <label for="dia6" class="control-label btn btn-default btn-mvp">
                                    <input type="radio" id="dia6" name="acesso" value="dia6" ng-model='radio6'>dia 6
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="">Desfile Grupo Especial:<br>
                                <label for="dia7" class="control-label btn btn-default btn-mvp">
                                    <input type="radio" id="dia7" name="especial" value="dia7" ng-model='radio7'>dia 7
                                </label>
                                <label for="dia8" class="control-label btn btn-default btn-mvp">
                                    <input type="radio" id="dia8" name="especial" value="dia8" ng-model='radio8'>dia 8
                                </label>
                                <label for="dia13" class="control-label btn btn-default btn-mvp">
                                    <input type="radio" id="dia13" name="especial" value="dia13" ng-model='radio12'>dia 13
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>
    
                <div class="form-actions">
                    <input class="form-control btn btn-success" type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    </body>
</html>