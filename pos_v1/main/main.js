'use strict';
function FizzBuzzWhizz(num){
  let elements = [];
  let num1 = num;
  while (num1>0) {
    elements.push(parseInt(num1 % 10));
    num1=parseInt(num1/10);
  }
  if(elements.indexOf(3)>=0){
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
/*function  quchong(collection) {
  let new_collection=[];
  new_collection[0]={};
  new_collection[0].barcode=collection[0];
  new_collection[0].count=1;
  let temp=[];
  let k=0;
  for(let i=1;i<collection.length;i++){
    for(var j=0;j<new_collection.length;j++){
      if(new_collection[j].barcode===collection[i])
        break;
    }
    if(j===new_collection.length){
      temp[k]={};
      temp[k].barcode=collection[i];
      temp[k].count=1;
      new_collection.push(temp[k]);
      k++;
    }
    else{
      new_collection[j].count++;
    }
  }
  return new_collection;
}*/
