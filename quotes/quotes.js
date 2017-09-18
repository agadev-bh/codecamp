var quotesApp = angular.module('quotesApp',[]);

quotesApp.controller('QuotesListController', ['$scope', function($scope) {
  
  $scope.mainContent = {
	    "quotes":["\"Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo.\""
	            ,"\"Tente mover o mundo - o primeiro passo será mover a si mesmo.\""
	            ,"\"Eu amo minha esposa mais do que qualquer outras coisa no mundo. Não existe uma outra mulher com quem eu possa me ver casado.\""
	            ,"\"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.\""
	            ,"\"Imagine uma nova história para sua vida e acredite nela.\""],
	    "author": ["- Confúcio"
	              ,"- Platão"
	              ,"- Ozzy Osbourne"
	              ,"- Roberto Shinyashiki"
	              ,"- Paulo Coelho"]
	};

	this.newQuote = function newQuote(){
		
		$scope.aleatoryPosition = Math.floor(Math.random() * Object.keys($scope.mainContent.quotes).length);

		$scope.chosenQuote = $scope.mainContent.quotes[$scope.aleatoryPosition];
		$scope.chosenAuthor = $scope.mainContent.author[$scope.aleatoryPosition];
		
		$scope.color = $scope.getRandomColor();

		$scope.bodyColor = {
			"background-color" : $scope.color,
			"color": $scope.color,
			"transition-duration": "2s",
			//"transition-delay": "0.4s"
		};
		
	    $scope.btnNewQuote = {
	      "background-color" : $scope.color,
	      "transition-duration": "2s",
	      //"transition-delay": "0.4s"
	    };
	};


	$scope.getRandomColor = function() {
		var hex = Math.floor(Math.random() * 0xFFFFFF);
		return "#" + ("000000" + hex.toString(16)).substr(-6);
	};

}]);