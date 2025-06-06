function add(a, b) {
  return a+b
}
add=(a , b) => a + b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;
sub = (a, b) =>  a - b;

const maths=[add,multiply,divide,sub]

function callback(a, b, maths) {
  const result=maths(a,b);
  return result;
}


 callback(3, 1, function(a,b) {
  return a ** b;
 }) 

function mathsAll(a, b, maths) {
  for (let opp of maths) {
   console.log (opp(a,b))
  }
  
 }


/// FOREACH
 
stringArray = ['yellow', 'red', 'pink', 'purple']
numberArray = [12, 13, 14, 15, 16]

numberArray.forEach(function (val) {
  console.log(val);
})
numberArray.forEach(function (val,i) {
  console.log(`THIS IS MY INDEX VALUE ${i} ${val*12}`);
})


stringArray.forEach(function(val) {
  console.log(val.toUpperCase());
}
);

stringArray.forEach(function(val,i) {
  console.log(`THIS IS MY INDEX VALUE ${i} ---- ${val.toUpperCase()}`);
}
);
stringArray.forEach(console.log)


const todo = [
  {
    id: 1,
    text: 'Walk the dog',
    priority: 'High',
  },
  {
    id: 2,
    text: 'Clean the House',
    priority: 'Medium',
  },
  {
     id: 3,
    text: 'Clean Dishes',
    priority: 'Low',
  }
]


/// BUILT-IN CALL BACK FUNCTION

function myForEach(arr, func)
{
  for (let val of arr) {
   func(val);
  }
}

function callback(a) {
  console.log (a + a);
}

//Map This will return Vale

const negativeNumberArray=numberArray.map(function (val) {
  return val * -1;
})

// Built in Methos for Map
function myMapCall(arr, func) {
  const mapperArray = [];
  for (let i = 0; i < arr.length; i++) {
    val=func(arr[i], i, arr);
    mapperArray.push(val);
  }
  return mapperArray
}

function numMap(val) {
  return val * val;
}

const priorities=myMapCall(todo, function(todo) {
  return todo.priority;
});

console.log(priorities); 

const repeat = myMapCall(['a', 'b', 'c', 'd', 'e'], function (val, idx) {
  return val.repeat(idx);
})

// filter (if return is true it will add the value in array else no)

const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'psychophysicotherapeutics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively'
];

const list= words.filter(function(word)
{
  return word.length >= 12
})


//check if my word contain vowels print

const hasVowel = function (word) {
  for (cha of word) {
    if (vowelChar(cha)) {
      return true
    }
  }
  return false
}
const vowelChar = function (char) {
  const str = 'aieou'
 return str.includes(char)
}

const vowelList = words.filter(function (word) {
 return !hasVowel(word)
})

// Built in Filter


function myFilter(arr, callback)
{
  const newArr=[]
  for (let i = 0; i < arr.length;i++) {
    if (callback(arr[i],i,arr)) {
      val = arr[i];

       newArr.push(val);
      }
  }
  return newArr
}

const numFilter=function filterCallback(val){
  return val > 10;
}

const evenIdx = function filterCallback(val,i) {
  return i%2===0
}

/// Inbuilt Some
function mySome(arr, callback)
{
  for (let i = 0; i < arr.length;i++) {
    if (callback(arr[i],i,arr))
    {
      return true
    }
  }
  return false;
}

function mySomeCallback(val) {
  if (val.length > 5) {
    return true;
  }
}

//// /// Inbuilt Every
function myEvery(arr, callback)
{
  for (let i = 0; i < arr.length;i++) {
    if (!callback(arr[i],i,arr))
    {
      return false;
    }
  }
  return true;
}

function myEveryCallback(val) {
  if (val.length > 5) {
    return true;
  }
}

/// Find Index and find
const score =[3,7,9,3,7,4,5,2,1,2,3,4,2,1,0]
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++)
  {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++)
  {
    if (callback(arr[i])) {
      return i;
    }
  }
    return undefined;
}

function myFindCallback(val) {
  if (val  === 100) {
    return true
  }
}


//Reduce : val(acc) and first element if arr to iterate

const myString = ['Hey', 'Good', 'Morning', '...']

reduce = myString.reduce(function (acc, val) {
  console.log("------- ACC VALUE ------- ", acc)
  console.log("val VALUE", val)
  return acc+ ' '+ val;
});

//Find Min

myNum = [89, 123, 456, 323, 33, 334,90,1]

minNum=myNum.reduce(function (min, val) {
  return min > val ? val : min;
})


///const solution = function(firstArray, secondArray) {
const firstArray = [1,2,3]
const secondArray= [4,5,6]
const solution = function (firstArray, secondArray) {
  if (firstArray.length != secondArray.length) {
    throw new Error("Both Array size should be same");
  }
  const total = firstArray.reduce((sum, val, i) => {
    const diff = Math.abs(val - secondArray[i]);
    return sum + diff * diff
  }, 0)
  return total/firstArray.length
}


function filter_list(l) {
  // Return a new array with the strings filtered out
return l.filter (val => typeof val ==='number')
   
  }

  




