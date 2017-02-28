console.log('in main.js');



var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};

var person3 = {
  fristName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};

// adding these objects in an array
var people = [ person1, person2, person3 ];


// i (index of array is less than the number of elements within the array, increment through)
for (i =0; i < people.length; i++){

  console.log(people[i].firstName, people[i].age);
  //use .(dot) notation to access properties from other objects
}

// if statment below will give not working because two new objects are differe
// {} = creates totally new object so comparing it to another empty object will not be the same
if({} === {}){
  console.log('working');
}
  else{
    console.log('not working');
  }

  ////functionsssssssssssssss

  //---------------------------------

  //-------------------------------------------------
var capitalCity = 'London';
function createPerson(firstName, lastName, email, age){
  var newPerson = {

    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    capitalCity: capitalCity,
    fullName: function() {
      return firstName + ' ' + lastName + ' from ' + capitalCity;
    }

  };
return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'some@me.com', '15');
console.log('newPerson:', harald.fullName());
var matt = createPerson('Matt', 'Robinson', 'someone@23.com', '35');
var Sam = createPerson('Sam', 'Udoh', 'sasasasomeone@23.com', '21');

//below pushes variable into array
people = [];
people.push(harald, matt, Sam);

function isOldEnough(age){

  return(age >= 18);
}


// if (isOldEnough(harald.age)){
//   console.log('come in');
// } else{
//
//   console.log('come back whe you are older.');
// }


var oldEnoughComments;
for (i = 0; i < people.length ; i++) {
  oldEnoughComments = (isOldEnough(people[i].age))
? 'is old enough'
: 'is not old enough '
  console.log(people[i].fullName(), oldEnoughComments);
}

console.log('-------00 JAVASCRIPT:');

var PI = 3.14;
function Circle(radius){
  this.radius = radius;
  this.circumference = function () {
    return 2 * Circle.PI * this.radius;
  };
}

  Circle.PI =22/7;

  Circle.prototype.area = function () {

    return Circle.PI * this.radius * this.radius;
  }



var coin = new Circle(1.2);
var plate = new Circle(7);
var circles = [coin, plate]
// classes begin with capital letters

console.log('Radius is:', coin.radius);
console.log('Cirumference is:', coin.circumference());
console.log('Area is:', coin.area());
