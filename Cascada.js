function solution(S) {
    const meetings = S.split(' ')
    console.log(meetings);
    let schedule = {Mon: [], Tue: [], Wed: [], Thu: [], Fri: [], Sat: [], Sun: []}
    for(let i = 0; i < meetings.length; i+=2){
      console.log(meetings[i], meetings[i])
        schedule[meetings[i]].push(meetings[i+1].replace(/[-,]/g, " ").split(" "))
       
        

    }
    
    console.log(schedule);
}

console.log(solution("Sun 10:00-20:00 Fri 05:00-10:00 Fri 16:30-23:50 Sat 10:00-24:00 Sun 01:00-04:00 Sat 02:00-06:00 Tue 03:30-18:15 Tue 19:00-20:00 Wed 04:25-15:14 Wed 15:14-22:40 Thu 00:00-23:59 Mon 05:00-13:00 Mon 15:00-21:00"))

let A2 = [15,3,19,4,15,0,5,16,2,10,1,10];
let B1 = [13,21,18,20,15,22,23,10,23,6,24,4];
let horas = [];
for(let i = 0; i < A2.length; i++){
  if(A2[i]<B1[i])
  {
    horas.push((A2[i]+24)-B1[i])
  }
  else{
    horas.push(A2[i]-B1[i])
  }


}
let max = Math.max(...horas);
console.log(horas);
console.log(max);


console.log(horario);