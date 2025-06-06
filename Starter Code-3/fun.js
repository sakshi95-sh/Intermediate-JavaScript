function printMe() {
  console.log( "HI GOOD MORNING");
}

printMe();
printMe();
printMe();
printMe();
printMe();
printMe();

// Using Expression
function sum(a=0,v,b)
{
  console.log("I AM STRING",b)
  return v*a * 3;
}

//rest argument

function rest(...arg) {
  let result=0
  for (let sum of arg) {
     result += sum;
  }
  return result;
}


function restWithout(arg) {
  let result=0
  for (let sum of arg) {
     result += sum;
  }
  console.log(arg)
  return result;
}
///// FUNCTION SCOPES
let globalVar="I AM GLOBAL VAR"
function outter() {
  let outterFunVar = "I AM OUTER FUN VAR"
  if (true)
  {
    console.log("I AM OUTTER FUN", outterFunVar)
    console.log("I AM OUTTER FUN, ACCESS GLOBAL VAR", globalVar)
    //console.log("I AM OUTTER FUN, INNER FUN VAR",innerFunVar)
  }
  
  function inner() {
    let innerFunVar = "I AM INNER FUN VAR"
    if (true) {
    console.log("************************************")
    console.log("I AM OUTTER FUN", outterFunVar)
    console.log("I AM OUTTER FUN, ACCESS GLOBAL VAR", globalVar)
    console.log("I AM OUTTER FUN, INNER FUN VAR",innerFunVar)
    }
  }
  inner();
}

console.log(globalVar);
// ************* We can access the fucntion variable Outside ***********************

//console.log(outterFunVar);
//console.log(innerFunVar);

/////  FUCNTION CLOSURE

function outerClosure(outer) {
  console.log("Outer value:", outer);
  function innerClosure(inner) {
     console.log("Inner value:", inner);
  }
  return innerClosure
}

const myClosure = outerClosure('hello');

/// Callback fun

function call(a, b, callback) {
  console.log("a value:", a);
  console.log("b value:", b);
  callback("I am a callback message!");
  return  callback("I AM RETURN")
}

function callmeback(msg) {
  console.log("Callback says:", msg);
  return "I AM RETURN OF callmeback "
}