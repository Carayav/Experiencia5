$(document).ready(function() {
  $("#editarPromedio").on('click', function(){
    $.ajax({
      type: 'POST',
      url: 'alumno',
      dataType: 'json',
      data: $('#promedioForm').serialize(),
      success: function(response) {
        console.log("Hola");
      }
    });
  });


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
  $(".announce").click(function(){ // Click to only happen on announce links
    console.log($(this).data('id'))
    $("#promedioEditar").val($(this).data('promedio'));
    $('#promedioModal').modal('show');
  });

});
