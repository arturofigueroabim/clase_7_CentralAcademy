const listaCalificaciones = [5,6,3,9,2,8,6];

var promedioCalificaciones = 0;

for(var i = 0; i < listaCalificaciones.length; i++){
    promedioCalificaciones += listaCalificaciones[i];
}

const promedio = promedioCalificaciones / listaCalificaciones.length;

console.log("Tienes un promedio de " + promedio);

if(promedio >= 8){
    console.log("Puedes tener beca este años");
}else{
    console.log("Suerte para el proximo año con tu beca");
}