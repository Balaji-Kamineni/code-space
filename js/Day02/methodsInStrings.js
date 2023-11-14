const str1="Balaji ";
const str2=new String("Kamineni");
let str;
  /* concat() */  // returns concatenation of 2 strings, original strings will be same.

// const str3=str1.concat(str2);
// console.table([str1,str2,str3])

/*  trim() */    //return trimmed stirng, original string will be same.

// let str=str1.trim();
// console.log(str+str2);

/*  toUpperCase() */ //returns uppercase version of input , original will be same

// str=str1.toUpperCase();
// console.log(str)
// console.log(str1);
 
/* toLowerCase() */   // return lowercase version of input, original will be same

// str=str1.toLowerCase();
// console.log(str)
// console.log(str1);

/* includes() */  //return boolean , to check if a substring is present in the string

//console.log(str1.includes("all"));

/* substr(a,b) */ //return sliced string. from a to a+b length

//console.log(str1.substr(2,4)); //laji

/* substring(a,b) */ // returns s[a:b] as in python

//console.log(str1.substring(2,4));  //la

/* charAt() */ //returns the character at given index

//console.log(str1.charAt(4));

/* indexOf() */ //returns first occurance index of given char   returns -1 if not present

//console.log(str1.indexOf("a"));

/* lastIndexOf() */  //returns last index of given character  returns -1 if not present

//console.log(str1.lastIndexOf("L"))

/* replace(a,b) */ // replaces FIRST occurance of a with b and return new string. original string remains same.

//console.log(str1.replace("a","y"))


/* replace(a,b) using regex */ // REPLACES ALL Occurances of a with b. /a/g is regex expression saying /character/g 

//console.log(str1.replace(/a/g,"y"));  

/* search() */ //if given substring is present in  string, return starting index in original string. returns -1 if not present

//console.log(str1.search(";la"))

/* split() */ // returns list  of  splited version of strings

// let c=str1.split("a")
// console.log(c);      ['B','l','ji']

/* charCodeAt() */ //returns ascii character of input

//console.log(str1.charCodeAt(0));

/* fromCharAt() */ //returns chr, if ascii value is provided.

//console.log(String.fromCharCode(66,67));

// How to check a char is upper case or lower case
// there is no particular method. you have to check using if else only

// let ans="";
// for (let i=0;i<str1.length;i++){
//     if (str1[i]==str1[i].toUpperCase()){
//         ans+=str1[i];
//     }
// }
// console.log(ans);// prints all uppercase letters from input


/* slice(a,b) */ // returns substring from a to b like in python str1[a:b] not counts last one


//if postive values , works same as substring()
//if negative count counts a+1 to b. also b included
//console.log(str1.slice(-5,-2))  //laj
//balaji