'use strict';
// a confirm question will pop out
var correct = 0;
var confirmed = confirm('This page is a LIE...Welcome to my About--me page; CLick ok to continue');
if (confirmed === true) {
  alert('Alrighty, let\'s do it');
}
else {
  alert('We are starting anywayz');
}
alert('To answers the questions, please type y for Yes, and n for No');
// Guessing question # 1
var firstQuestion = prompt('Do you think that I have a chimpanzee as a pet?');
console.log(firstQuestion);
if (firstQuestion.toUpperCase() === 'Y' ) {
  alert('Are you INSANE... those animals are mad lads!');
}
else {
  alert('That\'s right, I don\'t think it\'s safe to have one!');
  correct += 1;
}

// Guessing question # 2
var secondQuestion = prompt('Is the country of Somalia located in the Asian contenet between China and Russia?');
console.log(secondQuestion);
if (secondQuestion.toUpperCase() === 'N' ) {
  alert('Awesome, looks like you did\'t skip thier Geography class!');
  correct += 1;
}
else {
  alert('No, you are big time wrong... that\'s why you shouldn\'t skip Geography class');
}

// Guessing question # 3
var thirdQuestion = prompt('Do you think that Abdullah is a freaking robot');
console.log(thirdQuestion);
if (thirdQuestion.toUpperCase() === 'Y' ) {
  alert('I wonder why would you say that?!!');
}
else {
  alert('You\'re Damn right, I live and breath just like any human on mother Earth :/');
  correct += 1;
}
// Guessing question # 4
var forthQuestion = prompt('Do I have an alien twein that lives in Jupiter by him self?');
if (forthQuestion.toUpperCase() === 'Y' ) {
  alert('In your dreams sucka!');
}
else {
  alert('If I had one, I\'d live with him there as well!');
  correct += 1;
}
// Guessing question # 5
var fifthQuestion = prompt('Do I like coding?');
if (fifthQuestion.toUpperCase() === 'Y' ) {
  alert('Yeah I think so too');
  correct += 1;
}
else {
  alert('Too early to agree with you on this one');
}



//When done print all answers of the use on the bottom and alert them to look at it
alert('Thanks for playing the guess game, at the bottom of the page you should see the your score!');
document.write(firstQuestion);
document.write(secondQuestion);
document.write(thirdQuestion);
document.write("Your Score: " + correct + '/5 !' );
