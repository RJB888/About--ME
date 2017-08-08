'use strict';
// a confirm question will pop out
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
if (firstQuestion.toUpperCase() === 'Y' ) {
  alert('Are you INSANE... those animals are mad lads!');
}
else {
  alert('That\'s right, I don\'t think it\'s safe to have one!');
}

// Guessing question # 2
var secondQuestion = prompt('Is the country of Somalia located in the Asian contenet between China and Russia?');
if (secondQuestion.toUpperCase() === 'N' ) {
  alert('Awesome, looks like you did\'t skip thier Geography class!');
}
else {
  alert('No, you are big time wrong... that\'s why you shouldn\'t skip Geography class');
}
