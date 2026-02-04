
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

   //Remove falsy values

   function removeFalsyValues(arr){
      return arr.filter(boolean);
   }
   console.log(removeFalsyValues([0,1,false,2,'',3,null,undefined,'hello']));

   //Find largest number in array
   function findLargestNumber(arr){
      return Math.max(...arr);
   }

   console.log(findLargestNumber([1,5,3,9,2]));

   //Find smallest number in array
   function findSmallestNumber(arr){
      return Math.min(...arr);
   }     

   console.log(findSmallestNumber([1,5,3,9,2]));


   // fibonacci sequence

   function fibonacci(n){
      if (n<=0){
            return[];
          } else if (n===1){
            return [0];
          }
      const fib = [0,1];
          
      for(let i=2; i<n; i++){
        const  nextN = fib[i-1] + fib[i-2];
        fib.push(nextN);
      }        
      return fib;
   }     

   console.log(fibonacci(7));

   // how to call a function

   function callfun(){}

   const myfun = () => {};

   const newfun = new Function();

   // array of objects to a single object

   function AObj(arr){
   return arr.reduce((Accum,cItem) => {
      let key = cItem.id ;
      let value = cItem.value ;

      Accum[key] = value ;
      return Accum;
    },{});
   }

   //remove duplicates from array

   function  remDu(arr){
      return [...new set(arr)];
   }

   //is an anagram

   function areAnagrams(str1, str2){
      return str1.split('').sort().join('') === str2.split('').sort().join('');
   }
   
   // find largest number in a mixed input array

    
   function mixedArr(arr){
      return Math.max(...arr.filter(item => typeof item === 'number'));
   }

   const arr=[1,2,6,3,'john','adam',4,5];

   // merge arrays

   function mergeArr(arr1,arr2){
      return [...arr1,...arr2];
   }

   //stringify JS object to a Json string

   const obj = {name:'abah', age:40, wife : 'mbong'};
   const JsonString = JSON.stringify(obj);

   console.log(JsonString)