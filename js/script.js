"use strict"

let arr = [1,3,5,[2,5,7,[1,2]], 8, 12];
let glubina = 1;

function checkArray(arr){
  let arr2 = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
    arr2 = arr2.concat(checkArray(arr[i]));
    glubina +=1;
    }else{
      arr2.push(arr[i])
    }
  }
    return arr2;
}



console.log(checkArray(arr), glubina);