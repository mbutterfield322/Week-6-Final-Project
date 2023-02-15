class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.totalPoints = 0;
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
return array;
}

const cardValueMap = {
    j: 11,
    q: 12,
    k: 13,
    a: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
}

const mainDeck = ['k', 'k', 'k', 'k', 'q', 'q', 'q', 'q', 'j', 'j', 'j', 'j', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 'a', 'a', 'a', 'a']
console.log('New Deck of Cards: ' , mainDeck);
console.log('=========================================');

shuffle(mainDeck);
console.log('Shuffled Deck of Cards: ' , mainDeck);
console.log('=========================================');

const player1 = new Player('Player 1', []);
player1.deck = mainDeck.slice(0, 26);

const player2 = new Player('Player 2', []);
player2.deck = mainDeck.slice(26, 52);

console.log('Player One Deck: ', player1.deck);
console.log('Player Two Deck: ', player2.deck);

playerOneCard = 0;
playerTwoCard = 0;
player1.score = 0;
player2.score = 0;

for (let i = 0; i < player1.deck.length; i++){
    playerOneCard = player1.deck[i];
    console.log('1: ' + playerOneCard);

    playerTwoCard = player2.deck[i];
    console.log('2:' + playerTwoCard);
    
if (cardValueMap[playerOneCard] > cardValueMap[playerTwoCard]) {
    player1.score++;

    console.log('player1', cardValueMap[playerOneCard])
    console.log('player2', cardValueMap[playerTwoCard])

} else if (cardValueMap[playerTwoCard] > cardValueMap[playerOneCard]) {
player2.score++
    console.log('player1', cardValueMap[playerOneCard])
    console.log('player2', cardValueMap[playerTwoCard])

} else {
    console.log('player1', cardValueMap[playerOneCard])
    console.log('player2', cardValueMap[playerTwoCard])
}

console.log('Player 1 Points: ' + player1.score);
console.log('Player 2 Points: ' + player2.score);

console.log('Total for Player One: ' + player1.score);

console.log('Total for Player Two: ' + player2.score);

// if (player1.score > player2.score) {
//     alert (
//         `Wow! Great job, Player 1!
//         You have won the game with $(player1.score) points!
//         Player 2, you only has $(player2.score),
//         Better luck next time!`);

// } else if (player2.score > player1.score) {
//     alert (
//         `Wow! Great job, Player 2!
//         You have won the game with $(player2.score) points!
//         Player 1, you only has $(player1.score) points,
//         Better luck next time!`);
// } else
//     alert (
//         `Looks like there was a tie! What are the chances of that?!
//         Better luck next time!`);

}

/*
 a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array
  (do not use numbers to reference the last element, find it programmatically,
  ages[7] – ages[0] is not allowed).
  Print the result to the console.
*/
// console.log("\nQuestion 1a:\n");

// let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // declares an array called ages and assigns it a list of numbers
// console.log("The ages array is:", ages); // prints the ages array to the console

// let firstElement = ages[0]; //declares a variable called firstElement and assigns it the value of the first element in the array
// console.log("The first element in the array is:", firstElement); //prints the first element in the array to the console

// let lastElement = ages[ages.length - 1]; //declares a variable called lastElement and assigns it the value of the last element in the array
// console.log("The last element in the array is:", lastElement); //prints the last element in the array to the console

// let difference = lastElement - firstElement; //declares a variable called difference and subtracts lastElement minus the firstElement
// console.log("last element in the ages array:", difference); //printing last element minus the first element