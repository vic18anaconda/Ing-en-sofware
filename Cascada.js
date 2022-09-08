let horarios = "Sun 02:00-18:00 Fri 20:30-23:50 Sat 19:00-24:00 Tue 03:30-20:15 Wed 04:25-15:14 Thu 00:00-23:59 Mon 10:00-21:00";
let diasHorario = [];
let dia;
let tempHoraInicio, tempMinInicio, tempHoraFinal, tempMinFinal, tempTotal;

let totales = {
    Mon : 0,
    Tue : 0,
    Wed : 0,
    Thu : 0,
    Fri : 0,
    Sat : 0,
    Sun : 0
};

let resultado = {
    dia : "",
    total : 0
};

horarios = horarios.split(' ');

for(i=0; i<horarios.length-1;i+=2){
    diasHorario.push(horarios[i]+" "+horarios[i+1])
}

for(i=0; i<diasHorario.length; i++) {
    dia = diasHorario[i].substring(0,3); 
    tempHoraInicio = parseInt(diasHorario[i].substring(4,6))*60;
    tempMinInicio = parseInt(diasHorario[i].substring(7,9)) + tempHoraInicio;
    tempHoraFinal = parseInt(diasHorario[i].substring(10,12))*60;
    tempMinFinal = parseInt(diasHorario[i].substring(13,15)) + tempHoraFinal;

    tempTotal = tempMinFinal - tempMinInicio;

    if(dia != null) {
       totales[dia] += tempTotal;
    }
}



for(i in totales){
    totales[i] = 1440 - totales[i];
    if(totales[i]> resultado.total){
        resultado.total = totales[i];
        resultado.dia = i;
    }
}

console.log(totales);

console.log("El mayor tiempo de descanso se da el día : "+ resultado.dia + " y fue de : " + Math.trunc(resultado.total/60) + " Horas y " + Math.trunc(resultado.total % 60) + " Minutos" );