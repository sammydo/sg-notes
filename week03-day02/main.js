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
var test = 1;

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

function createPerson(firstNameParam, lastNameParam, emailParam, ageParam){
  var newPerson = {

    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age: ageParam

  };
return newPerson;
}

 var person = createPerson('Harald', 'yolo', 'some@me.com', '21');
console.log('newPerson:', person);


function isOldEnough(age){

  return(age >= 18);
}

if (isOldEnough(17)){
  console.log('come in');
} else{

  console.log('come back whe you are older.');
}
