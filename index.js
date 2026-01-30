function isPalindrome(string){
   return string === string.split('').reverse().join('') ;
}

console.log(isPalindrome("swiws"));


function reversestring(str){
   return str.split('').reverse().join('') ;
}

function inputArr(arr){
   return math.max(arr) - math.min(arr);
}

console.log(inputArr(arr));

//isPrime
function isPrime(num){
   if(num<=1){
      return false;
   }
   if(num === 2){
      return true;
   }
   if(num % 2 === 0){
      return false;
   }
   for (let i=3; i <= Math.sqrt(num); i+=2){

      if(num % i === 0){
         return false
      }
   }
      

      return true;
   }

   //checking for data types

      typeof value === Object && value !== object
   

   //factorial

   function factorial(n){
      if(n===0){
         return 1;
      }

      return n*factorial(n-1);
   }
   console.log(factorial(5));

   //add old array to new

   const oldArray= [1,2,3,4];
   const newArray=[];

   for (const element of oldArray){
      newArray.push(element);
   }