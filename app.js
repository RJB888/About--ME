'use strict';
// a confirm question will pop out
var correct = 0;
var confirmed = confirm('This page is a LIE...Welcome to my About--me page; CLick ok to continue');
if (confirmed) {
  alert('Alrighty, let\'s do it');
}
else {
  alert('We are starting anywayz');
}
alert('To answers the questions, please type y for Yes, and n for No');
// Guessing question # 1
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

// Guessing question # 2
var secondAnswer = prompt('Is the country of Somalia located in the Asian contenet between China and Russia?');
console.log(secondAnswer);
if (secondAnswer.toUpperCase() === 'N' ) {
  alert('Awesome, looks like you did\'t skip thier Geography class!');
  correct ++ ;
}
else {
  alert('No, you are big time wrong... that\'s why you shouldn\'t skip Geography class');
}

// Guessing question # 3
var thirdAnswer = prompt('Do you think that Abdullah is a freaking robot');
console.log(thirdAnswer);
if (thirdAnswer.toUpperCase() === 'Y' ) {
  alert('I wonder why would you say that?!!');
}
else if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO'){
  alert('You\'re Damn right, I live and breath just like any human on mother Earth :/');
  correct ++;}
else{
  alert('You DIDN\t Floww the rules');
}
// Guessing question # 4
var fourthAnswer = prompt('Do I have an alien twein that lives in Jupiter by him self?');
if (fourthAnswer.toUpperCase() === 'Y' ) {
  alert('In your dreams sucka!');
}
else if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO') {
  alert('If I had one, I\'d live with him there as well!');
  correct ++;
}
// Guessing question # 5
var fifthAnswer = prompt('Do I like coding?');
if (fifthAnswer.toUpperCase() === 'Y' ) {
  alert('Yeah I think so too');
  correct ++;
}
else {
  alert('Too early to agree with you on this one');
}

//When done print all answers of the use on the bottom and alert them to look at it
alert('Thanks for playing the guess game, at the bottom of the page you should see the your score!');
document.write(firstAnswer);
document.write(secondAnswer);
document.write(thirdAnswer);
document.write(fourthAnswer);
document.write('Your Score: ' + correct + '/5 !' );
