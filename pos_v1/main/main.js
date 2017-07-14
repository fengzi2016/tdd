'use strict';
function FizzBuzzWhizz(num){
  let elements=[];
  let num1=num;
  while(num1) {
    elements.push(num1 % 10);
    num1 /= 10;
  }
  if(elements.indexOf(3)>=0&&num%5!==0&&num%7!==0){
    return 'Fizz';
  }else if(num%3===0){
    if(num%5===0&&num%7===0){
      return'FizzBuzzWhizz';
    }
    else if(num%7===0){
      return 'FizzWhizz';
    }
    else if(num%5===0){
      return 'FizzBuzz';
    }
    else{
      return 'Fizz';
    }
  }
  else if(num%5===0){
    if(num%7!==0){
      return 'Buzz';
    }else {
      return'BuzzWhizz';
    }
  }else if(num%7===0){
    if(num%5!==0){
      return'Whizz';
    }else{
      return'BuzzWhizz';
    }
  }else{
    return num;
  }
}
