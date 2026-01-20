function isprime(num:number):boolean{
    if(num<=1){
        return false;
    }
    for(let i:number=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

let numberToCheck:number=29;
if(isprime(numberToCheck)){
    console.log(`${numberToCheck} is a prime number.`);
}else{
    console.log(`${numberToCheck} is not a prime number.`);
}