
//do while loop

let i:number=0;
//while(i>0){

    console.log("Bharath Reddy");
i++;
//}

//do while loop
//{
  //  console.log("Bharath Reddy");
    //i++
//}while(i>0);



// for of loop: iterate over each and every value of the predefined list(arrat, list)
let fruits:string[]=["Apple","Banana","Grapes","Mango"];
// traditional for loop
for(let i:number=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
// for of loop
for(let fruit of fruits){
    console.log(fruit);
}
