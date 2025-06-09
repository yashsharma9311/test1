// let num=0;
// let increment=()=>{
//     if(num>=0){
//         let i=document.querySelector("#number")
//         i.innerHTML="<h1>"+(++num)+"</h1>";
//     }
// }
// let decrement=()=>{
//     if(num>0){
//         let i=document.querySelector("#number")
//         i.innerHTML="<h1>"+(--num)+"</h1>"
//     }
// }
let count = 0;

function updateDisplay() {
  document.getElementById('number').textContent = count;
}

function increment() {
  count += 1;
  updateDisplay();
}

function decrement() {
  if(count>0){
  count -= 1;
  }
  updateDisplay();
}