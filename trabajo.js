const EstudianteDescuento= 0.2;
const TraineeDescuento=0.5;
const JuniorDescuento=0.85;
const Cantidad= document.getElementById("cantidad");
const Categoria= document.getElementById("CategoriasElegida");
const btnResumen = document.getElementById("btnResumen");
const btnReset = document.getElementById("btnReset");
let ValorEntrada=200;
let = ResumenTotal = 0;

function totalApagar() {

    if (Categoria.value == "estudiante"){
        ResumenTotal = (ValorEntrada*Cantidad.value)*EstudianteDescuento;}
    else if (Categoria.value == "trainee"){
            ResumenTotal = (ValorEntrada*Cantidad.value)*TraineeDescuento;}
    else{
        ResumenTotal = (ValorEntrada*Cantidad.value)*JuniorDescuento};

    document.getElementById("resultadoFinal").innerHTML = 'Total a Pagar : $'+ ResumenTotal;    
}

function borrar(){
    document.getElementById("resultadoFinal").innerHTML = 'Total a Pagar : $';
}

btnReset.onclick = borrar;
btnResumen.onclick = totalApagar;