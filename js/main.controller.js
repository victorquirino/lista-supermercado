angular.module("main-app", [])
  .controller("MainCtrl", function($scope){
    $scope.labelMarket = "Supermercado";
    $scope.labelList = "Lista de Produtos";

    $scope.marketView = true;

    var arrayProducts = {};
    $scope.arrayProducts = [];

    $scope.addProductToList = function(){
      arrayProducts =
        {
          'nome': $scope.name_product,
          'qtd': $scope.qtd_product,
          'price': $scope.price_product
        };

      $scope.arrayProducts.push(arrayProducts);

      $scope.name_product = '';
      $scope.qtd_product = '';
      $scope.price_product = '';
    };

    $scope.removeProductFromList = function(index){
      $scope.arrayProducts.splice(index, 1);
    }

    $scope.isMarketView = function(){
      $scope.marketView = true;
    }

    $scope.isListView = function(){
      $scope.marketView = false;
    }
  })
;
