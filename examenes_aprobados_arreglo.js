const examenes = [8,4,5,8,9,10,6,5,9];

var repetirExamen = 0;

for(var i = 0; i < examenes.length; i++){
    if(examenes[i] < 6 ){
        repetirExamen++;
    }
}

console.log("En total hiciste " +examenes.length+ " examenes");
console.log("Tendras que repetir " +repetirExamen + " examenes");