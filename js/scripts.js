'use strict';

(function (a) {
  if (a.length) {

  };
})(document.querySelectorAll('.tpl-moduloEjemplo-preuna'));



(function (o, $, h) {
  if (o) {

    function enviar() {
      console.log("Enviar")
      obj.errors.$p.addClass('sta-ok');
    }

    function validar() {
      var enviar = true,
        empty = false,
        email = false,
        check = false,
        file = false;

      obj.errors.$ul.empty();
      obj.errors.$p.removeClass('sta-ko').removeClass('sta-ok');

      for (var i = 0; i < obj.obli.length; i++) {
        if (obj.obli[i].value.trim()) {
          $(obj.obli[i]).parents('label').removeClass('sta-error');
        } else {
          $(obj.obli[i]).parents('label').addClass('sta-error');
          enviar = false;
          empty = true;
        };
      };

      if( h.mail( obj.email.value ) ){
        $(obj.email).parents('label').removeClass('sta-error');
      }else{
        $(obj.email).parents('label').addClass('sta-error');
        enviar = false;
        email = true;
      };
      
      if( obj.check.checked ){
        $(obj.check).parents('label').removeClass('sta-error');
      }else{
        $(obj.check).parents('label').addClass('sta-error');
        enviar = false;
        check = true;
      };

      if( obj.file.value && obj.file.files.length == 1 && obj.file.files[0].type == 'application/pdf'){
        $(obj.file).parents('label').removeClass('sta-error');
      } else {
        $(obj.file).parents('label').addClass('sta-error');
        enviar = false;
        file = true;
      };

      if(empty) obj.errors.$ul.append( $('<li></li>').text(obj.errors.copi_empty) );
      if(email) obj.errors.$ul.append( $('<li></li>').text(obj.errors.copi_email) );
      if(check) obj.errors.$ul.append( $('<li></li>').text(obj.errors.copi_check) );
      if(file) obj.errors.$ul.append( $('<li></li>').text(obj.errors.copi_file) );
      
      if(!enviar) {
        obj.errors.$p.addClass('sta-ko');
      }

      return enviar;
    };

    var obj = {
      obli: [],
      name: o.querySelector('.sta-form-pn_f_name'),
      pseudonimo: o.querySelector('.sta-form-pn_f_pseudonimo'),
      titulo: o.querySelector('.sta-form-pn_f_titulo'),
      telefono: o.querySelector('.sta-form-pn_f_telefono'),
      direccion: o.querySelector('.sta-form-pn_f_direccion'),
      email: o.querySelector('.sta-form-pn_f_email'),
      pais: o.querySelector('.sta-form-pn_f_pais'),
      file: o.querySelector('.sta-form-pn_f_manuscrito'),
      $fileName: $(o.querySelector('.sta-form-pn_file_span_noempty')),
      check: o.querySelector('.sta-form-pn_f_check'),
      errors: {
        $p: $(o.querySelector('.sta-form-pn_errors')),
        $ul: $(o.querySelector('.sta-form-pn_KO')),
        copi_empty: o.querySelector('.sta-empty').value,
        copi_email: o.querySelector('.sta-email').value,
        copi_file: o.querySelector('.sta-file').value,
        copi_check: o.querySelector('.sta-check').value,
        copi_server: o.querySelector('.sta-server').value
      }
    };
    obj.obli.push(obj.name, obj.titulo, obj.telefono, obj.direccion, obj.pais);

    $(o.querySelector('.sta-form-pn_formulario')).submit(function (e) {
      e.preventDefault();

      if ( validar() ) {
        enviar();
      }
      
    });

    $(obj.file).change(function(){
      if(obj.file.files.length && obj.file.files[0].type == 'application/pdf'){ 
        obj.$fileName.text( obj.file.files[0].name )
        $(obj.file).parents('label').addClass('sta-loading');
      }else{
        obj.$fileName.text('')
        $(obj.file).parents('label').removeClass('sta-loading');
      };
    });
  };

})(document.querySelector('.tpl-form-pn'), jQuery, hotusa());

(function (o, $, h){
  if(o && typeof json_noticias != 'undefined'){
    function crearHtml(info){
      var $html = $backup.clone();
      $( ".sta-noticia-pn_image",$html ).css('background-image',"url('"+info.img+"')");
      $( ".sta-noticia-pn_title", $html ).text(info.title);
      $( ".sta-noticia-pn_enlace a", $html ).attr('href', info.url);
      
      return $html;
    };

    function cargar(){
      $loading.removeClass('sta-complete');
      for (var _count = 0; _count < maxCarga && cargas < json_noticias.length; cargas++, _count++) {
        $container.append( crearHtml(json_noticias[cargas]) );
      };
      $counterButton.removeClass('sta-disable');
      $loading.addClass('sta-complete');

      /*    */
      
     if(cargas>=json_noticias.length){
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
})( document.querySelector(".tpl-noticia-pn"), jQuery, hotusa() );


(function (o, $, h){
  if(o){
    h.controlTop(o)
  };
})( document.querySelector(".tpl-header2-pn"), jQuery, hotusa() );