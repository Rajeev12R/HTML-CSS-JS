let word = ['W', 'S', 'G']
let game = true || false;
while (game) {
  let user = prompt('Enter Water(W) or Snake (S) or Gun (G)')
  let computer = word[Math.round(Math.random() * 3)];;
  if (computer == user) {
    alert('Game Draw')
  } else if (user == 'S' && computer == 'W') {
    alert('You won!')
  } else if (user == 'S' && computer == 'G') {
    alert('Computer  won!')
  } else if (user == 'W' && computer == 'S') {
    alert('You won')
  } else if (user == 'W' && computer == 'G') {
    alert('Computer won!')
  } else if (user == 'G' && computer == 'S') {
    alert('You won!')
  } else if (user == 'G' && computer == 'W') {
    alert('Computer won!')
  }
  game = confirm('Want to play again?')
}