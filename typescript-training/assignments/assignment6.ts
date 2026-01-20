function isprime(num:number):boolean{
    if(num<=1){
        return false;
    }
    if(num===2){
        return false;
    }

    const sqrt=Math.sqrt(num);
    for(let i:number=3;i<=Math.sqrt(num);i+=2){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

let numberToCheck:number=2;
if(isprime(numberToCheck)){
    console.log(`${numberToCheck} is a prime number.`);
}else{
    console.log(`${numberToCheck} is not a prime number.`);
}