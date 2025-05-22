/* const myArr = [0,1,2,3,4,5]
console.log(myArr[3])

const myArr1 =new Array(1,2,3,4,5)
console.log(myArr1)


//  Array Method

//  push    => adding value in array
//  pop     => remove last element of array 
//  unshift => it will add  at the start of array
//  shift   => it will remove first element of array 


myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);


myArr.shift()
console.log(myArr);


console.log(myArr.includes(5));
console.log(myArr.includes(9));

console.log(myArr.indexOf(3));
console.log(myArr.indexOf(9));




// join

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);




// slice , splice 


console.log("A", myArr);
const myn1 = newArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = newArr.splice(1, 3)
console.log(myn2);

*/
// push

const marvel_heros =["thor","ironman","spiderman"]
 const dc_heros =["superman","flash","batman"]
 
marvel_heros.push(dc_heros)
console.log(marvel_heros);

console.log(marvel_heros[3][2]);



// concate

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


// spride

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array =[1,2,3[456],7,[6,7[45]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// from 
  
console.log(Array.from("zohaib"));

// of 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
