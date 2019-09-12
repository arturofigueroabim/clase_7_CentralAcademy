const asistencias = [1,0,1,1,1,1,0,0,0,0];

var numeroDeAsistencias = 0;
i = i + 1;

console.log(asistencias.length)

for(var i =0; i < asistencias.length; i++){
    if(asistencias[i]){
        numeroeAsistencias++;
    }
} 

const porcentajeAsistencias = (numeroDeAsistencias * 100) /asistencias.length

console.log("Total de asistencias son: " +asistencias.length);
console.log("Tu tienes " + numeroDeAsistencias + " asistencias");
console.log("Equivale al "+ porcentajeAsistencias + "% de asistencias");