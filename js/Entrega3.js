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