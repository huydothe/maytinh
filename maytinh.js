function add(){
let num1=+document.getElementById('1').value;
let num2=+document.getElementById('2').value;
let amount=0;
amount = num1+num2;
document.getElementById('amount').innerHTML= amount;
 }
 function sub(){
     let num1=+document.getElementById('1').value;
     let num2=+document.getElementById('2').value;
     let amount=0;
     amount=num1-num2;
     document.getElementById('amount').innerHTML= amount;
 }
 function multi(){
     let num1=+document.getElementById('1').value;
     let num2=+document.getElementById('2').value;
     let amount=0;
     amount=num1*num2;
     document.getElementById('amount').innerHTML= amount;
 }
 function div(){
     let num1=+document.getElementById('1').value;
     let num2=+document.getElementById('2').value;
     let amount=0;
     amount=num1/num2;
     document.getElementById('amount').innerHTML= amount;
 }