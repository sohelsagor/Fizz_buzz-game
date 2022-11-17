
let result1 =document.querySelector('#a')



let input =parseInt(prompt('Please enter the number you would like to FizzBuzz up to:'));


for(let i=1; i<=input; i++){
if(i%3===0 && i%5===0){
    result1.innerHTML='FizzBuzz'
    result1.style.color='green'
    result1.style.fontsize='2rem'
    result1.style.border='10px solid purple'
}
else if(i%5===0){
    result1.innerHTML="Buzz" 
}
else if(i%3===0){
    result1.innerHTML="Fizz"   
}
else{
    result1.innerHTML=i 
}

}