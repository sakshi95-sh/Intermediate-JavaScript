// Creating Array
arr = [1,2, 10,4,13, 5, 6, 2, 323]


// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

//Desctruction

let [one,two,three,four] = [1,2,3]
//Skiping Value from Desctruction

let [, five, ,six]=[4,5, 3, 6,]

// let [one, two, ten,, four] = arr;

//nested array

nestedArr=['Outer1','Outer2',['inner1','inner2',['inne_inner1','inner_inner2']]]

console.log(arr)
// This array constructor
 const anotherArr=new Array(12, 4, 5, 6, 4)

 // WIth this we will create an empty array with 2, To create array using constructor you need to pass two arguments
const newArr = new Array(2);


//Rest and Spread
//rest always goes to left side (with Value)
//spread always goes to right side (with arr)
let arrAlpha=['a','b','c','d','e']
const [apple, ball, ...rest] = ['a', 'b', 'c', 'd', 'e']
//SPread is used to copy/clone an existing array

const arrAlphaClone = [...arrAlpha] 

