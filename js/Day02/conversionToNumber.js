let score="33abc";
//console.log(typeof score); 

        /* converting number to number remains same. */

let value=Number(score); 
//console.log(typeof value);  //number
//console.log(value);//33

        /* converting number+alphabets to number */

value=Number(score);
//console.log(typeof value); //number
//console.log(value);  //Nan

        /* converting string to number */

// score="Balaji";
// console.log(typeof score); //string
// value=Number(score);
// console.log(typeof value); //number
// console.log(value); //Nan
        
        /* converting boolean to number */

// score=true;
// console.log(typeof score);  //Boolean
// value=Number(score);
// console.log(typeof value); //number
// console.log(value); //1

// score=false;
// console.log(typeof score);  //Boolean
// value=Number(score);
// console.log(typeof value); //number
// console.log(value); //1


        /* converting null to number */

// score=null
// console.log(typeof score); //object
// value=Number(score)
// console.log(value); //0
// console.log(typeof value) //number

        /* converting undefined to number */

// score=undefined
// console.log(typeof score); //undefined
// value=Number(score);
// console.log(typeof value); //number
// console.log(value); //Nan