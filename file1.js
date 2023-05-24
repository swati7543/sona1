


const getTime=()=>{
    let date = new Date();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

var session = "AM";

if(h==0){
    h=1;
}
if(h>12){
    h=h-12;
    session ="PM";
}
h = (h<10)? "0"+h:h;
m = (m<10)? "0"+m:m;
s = (s<10)? "0"+s:s;

return`${h} : ${m} : ${s} ${session}`;
};
console.log(getTime());

setInterval(() => {
    // console.log(getTime());
 let clockOb =document.querySelector('.clock')
 clockOb.innerHTML=getTime();
},1000)
    












