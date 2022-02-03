document.getElementById("image").addEventListener("click", displayAlert);
document.getElementById("link1").addEventListener("click", displayAlertForLink1);
document.getElementById("link2").addEventListener("click", displayAlertForLink2);
document.getElementById("link3").addEventListener("click", displayAlertForLink3);

function displayAlert(){
  alert("This is an image of the black pieces on a chessboard.");
  alert("Look below for some chess links!");
}
function displayAlertForLink1(){
  alert("This is a description for a chess website called Chess.com.");
  alert("It is the world's largest and most popular chess website, and you can do many things on it!");
}
function displayAlertForLink2(){
  alert("This is a description for my own chess website.");
  alert("There are videos and puzzles on it.");
}
function displayAlertForLink3(){
  alert("This is a description for a chess website called 2700chess.com.");
  alert("Here, you can view live games and tournament results.");
  alert("You can also see live ratings, ratings from the past, all time records, and more. These can also be embedded into your own website.");
  alert("In addition, there are also detailed pages about every player, and so many statistics to look at.");
  alert("Be sure to check out 2700chess.com!");
}
