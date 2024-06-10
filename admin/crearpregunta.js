function alerta(){
    document.getElementById("AInicio") 
        window.alert("Está siendo dirigido a la pestaña Inicio");
}

function alerta1(){
    document.getElementById("AConfiguración") 
        window.alert("Está siendo dirigido a la pestaña Configuración");
}

function alerta2(){
    document.getElementById("AEditarpregunta") 
        window.alert("Está siendo dirigido a la pestaña Editar Preguntas");
}

function alerta3(){
    document.getElementById("ACrearpregunta") 
        window.alert("Está siendo dirigido a la pestaña Crear Preguntas");
}

function alerta4(){
    document.getElementById("ACategorias") 
        window.alert("Está siendo dirigido a la pestaña Categorías");
}

function imprimirValores() {
    var dato1 = document.getElementById("exampleFormControlTextarea1").value;
    var dato2 = document.getElementById("exampleFormControlTextarea2").value;
    var dato3 = document.getElementById("exampleFormControlTextarea3").value;
    var dato4 = document.getElementById("exampleFormControlTextarea4").value;

    console.log("La pregunta es: ", dato1);
    console.log("La alternativa correcta es: ", dato2);
    console.log("La alternativa incorrecta es: ", dato3);
    console.log("La alternativa incorrecta es: ", dato4);
}