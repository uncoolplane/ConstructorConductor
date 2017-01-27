/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

User.prototype.log = function() {
  for (key in this) {
    if(key !== "log") {
      console.log(key, this[key]);
    }
  }
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
  var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
  users.push(tyler);
  var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
  users.push(cahlan);
  var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
  users.push(lenny);

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

 tyler.log();

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  lenny.log();


//Now create another instance of User using your own information and then add that to your users array.

var becky = new User('Becky', 'becky@gmail.com', 'testthispassword');
users.push(becky);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

for(var i = 0; i < users.length; i++) {
  console.log("-----------------");
  users[i].log();
}
