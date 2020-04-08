

var words = [
    'dog',
    'cat',
    'flag'
];

var word = words[Math.floor(Math.random()*words.length)];
console.log(word)
var answerArray = [];
for(i=0; i<word.length; i++){
    answerArray[i]='_'
}
var remainingLetters = word.length;
const guesses = [];

while (remainingLetters > 0 ) {
    alert(answerArray.join(' '));

    var guess = prompt('Guess a letter or click Cancel to stop playing')
    if(guess === null){
        break;
    } else if(guess.length !== 1){
        alert("Please enter a single letter")
    } else{
        for(var j=0; j < word.length; j++){
            if(word[j] === guess){
                console.log(word[j])
                answerArray[j] = guess;
                remainingLetters --;
        } else{
            guesses.push(guess)
            console.log(guesses)
        }
    }

}
}
alert(answerArray.join(' '))
alert('Good job')