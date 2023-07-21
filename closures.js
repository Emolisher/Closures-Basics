var addTo = function (passed) {
  var inner = 2;
  return passed + inner;
};

console.log(addTo(3));

//if we move the passed outside
var passed3 = 3;
var addThree = function (passed3) {
  var inner = 3;
  return passed + inner;
};
console.log(addTo(3));

// Inside of our fn we are getting access to variables outside of it
// an outer function OR global (even after it is executed)

var addT = function (passedFour) {
  function add(innerFour) {
    return passedFour + innerFour;
  }
  return add;
};
console.log(addT(33)(22));

//HOisting

console.log(foo);
var foo = 1;

//usually 2 things are hoisted on the TOP
// var & fn declarations are bubbling to the top but are not assigned
// so this will work
foo = 3;
console.log(foo);
var foo;
//modern JS - we are using mainly let/const & arrow fn

//THIS & context
const object = {
  message: "Holla AMIGO!",

  getMessage() {
    const message = "Hallo Friend!";
    return this.message;
    // return message;
  },
};

console.log(object.getMessage());
//THIS references it's parent
//Inside an object - it references the OBJECT itself

//More Advanced E.X. for THIS in context

class Pet {
  constructor(name) {
    this.name = name;
  }
  getName = () => this.name;

  getSurname = function () {
    this.name;
  };
}
const cat = new Pet ('Catto');

console.log(cat.getName());
// inside  () =>  this refrences parent
console.log(cat.getSurname());
// inside a normal FN = it refrences the GLOBAL object
