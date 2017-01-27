//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriately

function QuizUser(name, email, password) {
  this.name = name,
  this.email = email,
  this.password = password,
  this.totalScore = 0
}

QuizUser.prototype.log = function() {
  console.log('My Name is ' + this.name);
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

function Question(title, answersArray, rightAnswer, difficulty) {
  this.title = title,
  this.answersArray = answersArray,
  this.rightAnswer = rightAnswer,
  this.difficulty = difficulty
}

Question.prototype.log = function() {
  console.log(this.title + "--->");
}

//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var u1 = new QuizUser("Bob", "bob@mail.com", "mypass");
var u2 = new QuizUser("Sue", "sue@mail.com", "pass123");
var u3 = new QuizUser("Alien", "alien@mail.com", "password");

quizUsers.push(u1);
quizUsers.push(u2);
quizUsers.push(u3);

//Create a questions Array which is going to hold all of our questions

  var truefalse = ["T", "F"];
  var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

//title, answersArray, rightAnswer, difficulty
var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', truefalse, 'T', 2);
var q2 = new Question('T/F: JavaScript is just a scripting version of Java', truefalse, 'F', 1);
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", truefalse, 'T', 3);

//Now push all of your instances of Question into the questions Array
questions.push(q1);
questions.push(q2);
questions.push(q3);

console.log('My users Array and my questions array are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

for(var i = 0; i < quizUsers.length; i++) {
  quizUsers[i].log();
}

for(var i = 0; i < questions.length; i++) {
  questions[i].log();
}
