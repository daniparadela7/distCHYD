"use strict";angular.module("app").controller("HeaderController",["$rootScope","$window","$scope","$timeout",function($rootScope,$window,$scope,$timeout){$scope.hadas=function(){var url="http://"+$window.location.host+"/hadas";$window.location.href=url},$scope.duendes=function(){var url="http://"+$window.location.host+"/duendes";$window.location.href=url},$timeout(function(){$scope.ruta=$rootScope.ruta,$(document).on("click",".navbar-collapse.in",function(e){if($(e.target).is("a")){var el=this;$timeout(function(){$(el).collapse("hide")},500)}})},0)}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas",{controller:"HomeController",templateUrl:"sections/hadas/home/homeView.html",meta:{title:"El Club de las Hadas. Cumpleaños, talleres, bautizos y comuniones",description:"El Club de las Hadas de Palma de Mallorca realiza fiestas de cumpleaños, talleres para padres y niños, bautizos, comuniones y charlas."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("HomeController",[function(){}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/cumpleaños",{controller:"CumpleañosController",templateUrl:"sections/hadas/cumpleaños/cumpleañosView.html",meta:{title:"Cumpleaños | El Club de las Hadas",description:"Aquí encontrarás toda las información relacionada con los cumpleaños que realizamos en El Club de las Hadas de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("CumpleañosController",[function(){}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/talleres",{controller:"TalleresController",templateUrl:"sections/hadas/talleres/talleresView.html",meta:{title:"Talleres | El Club de las Hadas",description:"Aquí encontrarás toda la información relacionada con los talleres de El Club de las Hadas de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/talleres",{controller:"TalleresController",templateUrl:"sections/hadas/talleres/talleresView.html",meta:{title:"Talleres | El Club de los Duendes",description:"Aquí encontrarás toda la información relacionada con los talleres de El Club de los Duendes de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("TalleresController",["$scope","$timeout",function($scope,$timeout){$scope.img_manualidades=["../../../assets/images/hadas/talleres/manualidades1.jpg","../../../assets/images/hadas/talleres/manualidades2.jpg"],$scope.img_costura=["../../../assets/images/hadas/talleres/costura1.jpg","../../../assets/images/hadas/talleres/costura2.jpg"],$scope.img_reposteria=["../../../assets/images/hadas/talleres/reposteria1.jpg","../../../assets/images/hadas/talleres/reposteria2.jpg"],$scope.img_belleza=["../../../assets/images/hadas/talleres/belleza1.jpg","../../../assets/images/hadas/talleres/belleza2.jpg"],$scope.img_musica=["../../../assets/images/hadas/talleres/musical1.jpg","../../../assets/images/hadas/talleres/musical2.jpg"],$timeout(function(){$(".sliderTaller").owlCarousel({stagePadding:0,smartSpeed:450,nav:!0,navText:["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"],dots:!1,loop:!0,autoplay:!1,autoplayTimeout:2500,autoplayHoverPause:!0,responsiveClass:!0,items:1})},500)}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/comuniones",{controller:"ComunionesController",templateUrl:"sections/hadas/comuniones/comunionesView.html",meta:{title:"Comuniones | El Club de las Hadas",description:"Aquí encontrarás toda las información relacionada con las comuniones que realizamos en El Club de las Hadas de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/comuniones",{controller:"ComunionesController",templateUrl:"sections/hadas/comuniones/comunionesView.html",meta:{title:"Comuniones | El Club de los Duendes",description:"Aquí encontrarás toda las información relacionada con las comuniones que realizamos en El Club de los Duendes de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("ComunionesController",[function(){}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/noticias",{controller:"NoticiasController",templateUrl:"sections/hadas/noticias/noticiasView.html",meta:{title:"Noticias | El Club de las Hadas",description:"Aquí encontrarás todas las noticias relacionadas con El Club de las Hadas de Palma de Mallorca."},resolve:{noticias:function(apiService){return apiService.getNodes("noticias")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/hadas/noticias/:pretty",{controller:"NoticiaController",templateUrl:"sections/hadas/noticias/noticia/noticiaView.html",meta:{title:"Noticias | El Club de las Hadas",description:"Aquí encontrarás todas las noticias relacionadas con El Club de las Hadas de Palma de Mallorca."},resolve:{noticia:function(apiService,$route){return apiService.getNode("noticialink",$route.current.params.pretty)},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/noticias",{controller:"NoticiasController",templateUrl:"sections/hadas/noticias/noticiasView.html",meta:{title:"Noticias | El Club de los Duendes",description:"Aquí encontrarás todas las noticias relacionadas con El Club de los Duendes de Palma de Mallorca."},resolve:{noticias:function(apiService){return apiService.getNodes("noticias")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/noticias/:pretty",{controller:"NoticiaController",templateUrl:"sections/hadas/noticias/noticia/noticiaView.html",meta:{title:"Noticias | El Club de los Duendes",description:"Aquí encontrarás todas las noticias relacionadas con El Club de los Duendes de Palma de Mallorca."},resolve:{noticia:function(apiService,$route){return apiService.getNode("noticialink",$route.current.params.pretty)},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("NoticiasController",["$scope","noticias",function($scope,noticias){$scope.noticias=[],angular.forEach(noticias,function(value,key){value.fecha_noticiaFormato=moment(value.fecha_noticia).format("DD/MM/YY"),$scope.noticias.push(value)})}]),angular.module("app").controller("NoticiaController",["$scope","noticia",function($scope,noticia){$scope.noticia=noticia,$scope.fecha_noticiaFormato=moment(noticia.fecha_noticia).format("DD/MM/YYYY HH:mm")}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/nosotros",{controller:"NosotrosController",templateUrl:"sections/hadas/nosotros/nosotrosView.html",meta:{title:"Nosotros | El Club de las Hadas",description:"Aquí encontrarás información del personal El Club de las Hadas de Palma de Mallorca."},resolve:{nosotros:function(apiService){return apiService.getNodes("nosotros")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/nosotros",{controller:"NosotrosController",templateUrl:"sections/hadas/nosotros/nosotrosView.html",meta:{title:"Nosotros | El Club de los Duendes",description:"Aquí encontrarás información del personal El Club de los Duendes de Palma de Mallorca."},resolve:{nosotros:function(apiService){return apiService.getNodes("nosotros")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("NosotrosController",["$scope","nosotros",function($scope,nosotros){$scope.nosotros=nosotros}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/galeria",{controller:"GaleriaController",templateUrl:"sections/hadas/galeria/galeriaView.html",meta:{title:"Galería | El Club de las Hadas",description:"Aquí encontrarás imágenes de cumpleaños y del local El Club de las Hadas de Palma de Mallorca."},resolve:{album:function(apiService){return apiService.getNodes("album")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/hadas/galeria/:pretty",{controller:"AlbumController",templateUrl:"sections/hadas/galeria/album/albumView.html",meta:{title:"Galería | El Club de las Hadas",description:"Aquí encontrarás imágenes de cumpleaños y del local El Club de las Hadas de Palma de Mallorca."},resolve:{album:function(apiService,$route){return apiService.getNode("albumlink",$route.current.params.pretty)},imagenes_album:function(apiService,$route){return apiService.getNodesById("imagenlink",$route.current.params.pretty)},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/galeria",{controller:"GaleriaController",templateUrl:"sections/hadas/galeria/galeriaView.html",meta:{title:"Galería | El Club de los Duendes",description:"Aquí encontrarás imágenes de cumpleaños y del local El Club de los Duendes de Palma de Mallorca."},resolve:{album:function(apiService){return apiService.getNodes("album")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/galeria/:pretty",{controller:"AlbumController",templateUrl:"sections/hadas/galeria/album/albumView.html",meta:{title:"Galería | El Club de los Duendes",description:"Aquí encontrarás imágenes de cumpleaños y del local El Club de los Duendes de Palma de Mallorca."},resolve:{album:function(apiService,$route){return apiService.getNode("albumlink",$route.current.params.pretty)},imagenes_album:function(apiService,$route){return apiService.getNodesById("imagenlink",$route.current.params.pretty)},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("GaleriaController",["$scope","album",function($scope,album){$scope.albumes=album}]),angular.module("app").controller("AlbumController",["$scope","album","imagenes_album",function($scope,album,imagenes_album){$scope.album=album,$scope.imagenes_album=imagenes_album}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/cafeteria",{controller:"CafeteriaController",templateUrl:"sections/hadas/cafeteria/cafeteriaView.html",meta:{title:"Cafeteria | El Club de las Hadas",description:"Aquí encontrarás toda las información relacionada con El Club de las Hadas de Palma de Mallorca. Horarios, cartas..."},resolve:{cafeteria:function(apiService){return apiService.getNodes("cafeteria")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/cafeteria",{controller:"CafeteriaController",templateUrl:"sections/hadas/cafeteria/cafeteriaView.html",meta:{title:"Cafeteria | El Club de los Duendes",description:"Aquí encontrarás toda las información relacionada con El Club de los Duendes de Palma de Mallorca. Horarios, cartas..."},resolve:{cafeteria:function(apiService){return apiService.getNodes("cafeteria")},delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("CafeteriaController",["$scope","$timeout","cafeteria",function($scope,$timeout,cafeteria){$scope.img_cafeteria=cafeteria,console.log($scope.img_cafeteria),$timeout(function(){$(".sliderCafeteria").owlCarousel({stagePadding:0,smartSpeed:450,nav:!0,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},580:{items:2},768:{items:3},1199:{items:4}}})},500)}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/privacidad",{controller:"PrivacidadController",templateUrl:"sections/hadas/privacidad/privacidadView.html",meta:{title:"Privacidad | El Club de las Hadas",description:"Aquí encontrarás toda las información relacionada con la privacidad de la web El Club de las Hadas."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/privacidad",{controller:"PrivacidadController",templateUrl:"sections/hadas/privacidad/privacidadView.html",meta:{title:"Privacidad | El Club de los Duendes",description:"Aquí encontrarás toda las información relacionada con la privacidad de la web El Club de las Hadas y Duendes."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("PrivacidadController",[function(){}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/hadas/legal",{controller:"LegalController",templateUrl:"sections/hadas/legal/legalView.html",meta:{title:"Legal | El Club de las Hadas",description:"Aquí encontrarás toda las información relacionada con la legalidad de la web El Club de las Hadas."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}}).when("/duendes/legal",{controller:"LegalController",templateUrl:"sections/hadas/legal/legalView.html",meta:{title:"Legal | El Club de los Duendes",description:"Aquí encontrarás toda las información relacionada con la legalidad de la web El Club de las Hadas y Duendes."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("LegalidadController",[function(){}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/duendes",{controller:"HomeController",templateUrl:"sections/duendes/home/homeView.html",meta:{title:"El Club de los Duendes. Cumpleaños, talleres, bautizos y comuniones",description:"El Club de los Duendes de Palma de Mallorca realiza fiestas de cumpleaños, talleres para padres y niños, bautizos, comuniones y charlas."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/duendes/cumpleaños",{controller:"CumpleañosController",templateUrl:"sections/duendes/cumpleaños/cumpleañosView.html",meta:{title:"Cumpleaños | El Club de los Duendes",description:"Aquí encontrarás toda las información relacionada con los cumpleaños que realizamos en El Club de los Duendes de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").config(["$routeProvider",function($routeProvider){$routeProvider.when("/duendes/parque",{controller:"ParqueController",templateUrl:"sections/duendes/parque/parqueView.html",meta:{title:"Parque de bolas | El Club de los Duendes",description:"Aquí encontrarás toda la información relacionada con el parque de bolas de El Club de los Duendes de Palma de Mallorca."},resolve:{delayForTransitions:function($timeout){return $timeout(function(){return!0},500)}}})}]),angular.module("app").controller("ParqueController",["$scope","$timeout",function($scope,$timeout){$scope.img_parque=["../../../assets/images/duendes/bolas/bolas1.jpg","../../../assets/images/duendes/bolas/bolas2.jpg","../../../assets/images/duendes/bolas/futbol.jpg","../../../assets/images/duendes/bolas/pantallapequena.jpg"],console.log($scope.img_parque),$timeout(function(){$(".sliderParque").owlCarousel({stagePadding:0,smartSpeed:450,nav:!0,dots:!1,loop:!0,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1},320:{items:1},580:{items:2},768:{items:3},1199:{items:4}}})},500)}]);