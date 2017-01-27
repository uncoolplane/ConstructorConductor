//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
  this.name = name,
  this.age = age
}


//Now create three instances of Person with data you make up

var p1 = new Person('John', 23);
var p2 = new Person('Becky', 12);
var p3 = new Person("Smith", 45);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  // console.log(this.name);
  alert(this.name);
}

p1.sayName();
p2.sayName();
p3.sayName();
