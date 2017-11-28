$(document).ready(function() {
  $("#editarPromedio").on('click', function(){
    console.log($("#idEditar").val());
    console.log($("#promedioEditar").val());
    var id = $("#idEditar").val();
    var promedio = $("#promedioEditar").val();
    $.ajax({
      type: 'GET',
      url: 'alumno/update/'+id+'?promedio='+promedio,
      success: function(response) {
        window.location.href = "notas";
      }
    });
  });

  $(".eliminar").on('click',function(){
    console.log('id: ' + $(this).data('id'));
    var id = $(this).data('id');
    $.ajax({
      type: 'DELETE',
      url: 'alumno/'+id,
      success: function(response) {
        console.log("Borrado ID: "+ id);
        window.location.href = "notas";
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
        window.location.href = "/"
      }
    });
  });
  $(".announce").click(function(){ // Click to only happen on announce links
    console.log('id: ' + $(this).data('id'));
    $("#idEditar").val($(this).data('id'));
    $("#promedioEditar").val($(this).data('promedio'));
    $('#promedioModal').modal('show');
  });
});
