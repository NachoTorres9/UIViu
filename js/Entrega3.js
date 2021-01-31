function inicializa(){
    $("#margen").css("height",screen.height/6+"px")
    
}

function iniciarSesion(){
    if ($("#clave").val().length <6){
        $("#error").show();
        
    }
        
    else {
        var usuario = $("#txtUsuario").val();
        $("#inicioSesion").hide()
        $("#home").show();
        $("body").css("background-color","white" )
        $("#usuario").text("Bienvenido: "+usuario);
        
    }
}

function seleccionarImagen(input){
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width("auto")
                .height("auto")
                .attr('max-height',"300px")
                .attr('max-width',"200px");
        };

        reader.readAsDataURL(input.files[0]);
        $("#load").show()
        setTimeout(function(){$("#load").hide(); $("#respuesta").show()},5000)
    }
}
