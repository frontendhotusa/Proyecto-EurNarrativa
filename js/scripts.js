'use strict';

(function (a) {
  if (a.length) {
    
  };
})(document.querySelectorAll('.tpl-moduloEjemplo-preuna'));


(function (o,json, $ , h){
  if(o && json){
    function crearHtml(info){
      var $html = $backup.clone();
      $( ".sta-noticia-pn_image",$html ).css('background-image',"url('"+info.img+"')");
      $( ".sta-noticia-pn_title", $html ).text(info.title);
      $( ".sta-noticia-pn_enlace a", $html ).attr('href', info.url);
      
      return $html;
    };

    function cargar(){
      $loading.removeClass('sta-complete');
      for (var _count = 0; _count < maxCarga && cargas < json.length; cargas++, _count++) {
        $container.append( crearHtml(json[cargas]) );
      };
      $counterButton.removeClass('sta-disable');
      $loading.addClass('sta-complete');

      /*    */
      
     if(cargas>=json.length){
      //$(".sta-noticia-pn_button", $counterButton).;
        $counterButton.addClass('sta-disable');
     }


      /*   */
    };

    var $container = $( o.querySelector(".sta-noticia-pn_container") ),
    $backup = $( o.querySelector(".sta-noticia-pn_news") ).clone(),
    $counterButton = $( o.querySelector(".sta-noticia-pn_more") ),
    $loading = $( o.querySelector(".sta-noticia-pn_loading") ), 
    maxCarga = 6,
    cargas = 0;

    $( o.querySelector(".sta-noticia-pn_news") ).remove();

    cargar();

    $(".sta-noticia-pn_button", $counterButton).click( cargar );

  };
})( document.querySelector(".tpl-noticia-pn"), json_noticias, jQuery, hotusa() );