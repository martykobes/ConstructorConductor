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

//Create an Array called 'users' that will store all our instances of User.

  var players  =[];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  players.push(new User('Tyler', ' tylermcginnis33@gmail.com','iLoveJS' ));
  players.push (new User('Cahlan', 'cahlan@devmounta.in', 'ilovehashtags'));
  players.push(new User('Lenny', 'lenny@thelenster.com', 'ilovelentilsoup'));

console.log('Tyler\'s information is ');//Console.log all of Tylers information

console.log('Tylers infromation is: ' + players[0].name +' '+ players[0].email+' ' + players[0].pw ) ; 


//Now console.log all of Lennys information

console.log('Lenny\'s infromation is: ' + players[2].name +' '+ players[2].email+' ' + players[2].pw ) ; 


//Now create another instance of User using your own information and then add that to your users array.

  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  
for (var i = 0; i < players.length; i++) {
    console.log(players[i].name);
}

for (var i = 0; i <quiz.length; i++) {
    console.log(quiz[i].title);