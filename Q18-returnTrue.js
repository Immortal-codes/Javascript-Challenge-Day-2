//Write a JavaScript program to check two given numbers and return true if one of the number is 50
// or if their sum is 50.

function sum(a,b){
    if(a==50 || b==50 || a+b == 50)
    {
        return true;
    }
    else{
           return false;
    }
}

console.log(sum(25,25));
console.log(sum(50,25));
console.log(sum(5,2));