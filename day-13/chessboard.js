// let size= 8;
// let board =''


// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//       if ((x + y) % 2 == 0) {
//         board += " ";
//       } else {
//         board += "#";
//       }
//     }
//     board+= '\n'
// }
// console.log(board)

// Creating a chess board that takes 2 different kind of values 
//the board can be any size
//the values need to switch off everyother one 

// let chessBoard = '';


// for(let i = 0; i<3; i++){
//     i%2===0 ? chessBoard+='o' : chessBoard+='x'

// }
// console.log(chessBoard)
var x=8;
var y=8;

var chessBoard = '';

for (var i=0; i<y; i++){
    var row = 'x'
    for (var j=0; j<x; j++){
        row+='o'
    }
}
console.log(chessBoard)