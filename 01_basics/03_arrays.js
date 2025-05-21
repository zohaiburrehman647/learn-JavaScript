const myArr = [0,1,2,3,4,5]
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