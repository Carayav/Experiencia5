$(document).ready(function() {
  $("#submit").on('click', function(){
    $.ajax({
      type: 'POST',
      url: 'alumno',
      dataType: 'json',
      data: $('#formulario').serialize(),
      success: function(response) {
        console.log("Hola");
      }
    });
  });
});
