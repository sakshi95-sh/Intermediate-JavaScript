
//Object Literal
const circle = {
  radius: 1,
  location:{
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("DRAW");
  }
}
circle.draw();


//Factory
function createCircle(radius) { 
  return {
    radius,
    draw: function ()
    {
         console.log("FACTORY DRAW!!");
    }
  }

}
 console.log(createCircle(1));
const circleFactory = createCircle(1);
circleFactory.draw();


//Constructor Object
function ConstCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("CONSTRUCTOR DRAW!!");  
  } 
}

const circleConst = new ConstCircle(1);

circleConst.draw();

// Itreatation of Object

const keys = Object.keys(circleConst);
console.log(keys);

for (let keys in circleConst)
{
  if(typeof circle[keys] !== 'function'){
    
  console.log("USING FOR LOOP", circle[keys]);
    }
}

if ('radius' in circleConst)
{
  console.log("IT HAS RADIUS");
}







