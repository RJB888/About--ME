'use strict';
// a confirm question will pop out
var correct = 0;
var playerName = prompt('Please type your name in the box');
var confirmed = confirm('This page is a LIE...Welcome ' + playerName + ' to my About--me page; CLick ok to continue');
if (confirmed) {
  alert('Alrighty, let\'s do it');
}
else {
  alert('We are starting anywayz');
}
alert('To answers the questions, please type y or Yes, and n or No');

function answer1(){
  var firstAnswer = prompt('Do you think that I have a chimpanzee as a pet?');
  console.log(firstAnswer);
  if (firstAnswer.toUpperCase() === 'Y' || firstAnswer.toUpperCase() === 'YES') {
    alert('Are you INSANE... those animals are mad lads!');
  }
  else if (firstAnswer.toUpperCase() === 'N' || firstAnswer.toUpperCase() === 'NO') {
    alert('That\'s right, I don\'t think it\'s safe to have one!');
    correct ++;
  }
  else {
    alert('You DIDN\t Floww the rules');
  }
}
answer1();

// Guessing question # 2
function answer2(){
  var secondAnswer = prompt('Is the country of Somalia located in the Asian contenet between China and Russia?');
  console.log(secondAnswer);
  if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO' ) {
    alert('Awesome, looks like you did\'t skip thier Geography class!');
    correct ++ ;
  }
  else {
    alert('No, you are big time wrong... that\'s why you shouldn\'t skip Geography class');
  }
}
answer2();

// Guessing question # 3
function answer3() {
  var thirdAnswer = prompt('Do you think that Abdullah is a freaking robot');
  console.log(thirdAnswer);
  if (thirdAnswer.toUpperCase() === 'Y' || thirdAnswer.toUpperCase() === 'YES' ) {
    alert('I wonder why would you say that?!!');
  }
  else if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO'){
    alert('You\'re Damn right, I live and breath just like any human on mother Earth :/');
    correct ++;}
  else{
    alert('You DIDN\t Floww the rules');
  }
}
answer3();

// Guessing question # 4
function answer4() {
  var fourthAnswer = prompt('Do I have an alien twin that lives in Jupiter by him self?');
  console.log(fourthAnswer);
  if (fourthAnswer.toUpperCase() === 'Y' || fourthAnswer.toUpperCase() === 'YES' ) {
    alert('In your dreams sucka!');
  }
  else if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO') {
    alert('If I had one, I\'d live with him there as well!');
    correct ++;
  }
}
answer4();

// Guessing question # 5
function answer5() {
  var fifthAnswer = prompt('Do I like coding?');
  console.log(fifthAnswer);
  if (fifthAnswer.toUpperCase() === 'Y' || fifthAnswer.toUpperCase() === 'YES' ) {
    alert('Yeah I think so too');
    correct ++;
  }
  else {
    alert('Too early to agree with you on this one');
  }
}
answer5();

// Guessing question # 6
function answer6() {
  alert('for this next question you have 4 tries total to get the right answer!');
  for (var i = 3 ; i > 0 ; i--) {
    var sixthAnswer = prompt('Can you guess how many languages I speak? Hint: between 1-10!');
    console.log(sixthAnswer);
    if(sixthAnswer === '' || sixthAnswer === null) {
      alert('Invalid answer, try again. You have ' + i + ' tries left!');
    }
    else if ( sixthAnswer > 3) {
      alert('You guessed too high, try again! ' + i + ' tries left!');

    }
    else if (sixthAnswer < 3 ) {
      alert('You guessed too low, try again! ' + i + ' tries left!');
    }
    else {
      alert('That\'s right; Arabic, Somali, and English ');
      correct ++;
      break;
    }
  }
}
answer6();

// Guessing question # 7
/*   consider looking into this var changeArrayToString = countriesIVisited.join(', ');
  var seventhAnswer = prompt('Where I lived?').toUpperCase();
  console.log(seventhAnswer);
if (countriesIVisited.includes(seventhAnswer().toUpperCase()))*/
function answer7() {
  for (var i = 7 ; i > 0; i--) {
    var countriesIVisited = ['SYRIA', 'USA', 'CANADA','HUNGARY','UAE', 'SOMALIA'];
    var seventhAnswer = prompt('Where I lived?').toUpperCase();
    console.log(seventhAnswer);
    if (seventhAnswer === countriesIVisited[0] || seventhAnswer === countriesIVisited[1] || seventhAnswer === countriesIVisited[2] || seventhAnswer === countriesIVisited[3] || seventhAnswer === countriesIVisited[4] || seventhAnswer === countriesIVisited[5]) {
      alert('Wow that\'s right places where I lived are: ' + countriesIVisited);
      correct++;
      break;
    }
    else {
      alert('worng try again');
    }
  }
}
answer7();

//When done print all answers of the use on the bottom and alert them to look at it
alert('Thanks for playing the guess game, at the bottom of the page you should see the your score!');

document.write(playerName + ' Your Scored: ' + correct + ' out of 7 ! ' );
