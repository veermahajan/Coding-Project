document.getElementById("image").addEventListener("click", displayAlert);
document.getElementById("link1").addEventListener("click", displayAlertForLink1);
document.getElementById("link2").addEventListener("click", displayAlertForLink2);
document.getElementById("link3").addEventListener("click", displayAlertForLink3);
document.getElementById("link4").addEventListener("click", displayAlertForLink4);
document.getElementById("link5").addEventListener("click", displayAlertForLink5);
document.getElementById("websites").addEventListener("click", displayAlertSpecial);
window.addEventListener("message",e=>{e['data']&&"8901807"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});
function displayAlert(){
  alert("This is an image of the black pieces on a chessboard.");
  alert("Look below for some chess links!");
}
function displayAlertForLink1(){
  alert("This is a description for a chess website called Chess.com.");
  alert("It is the world's largest and most popular chess website, and you can do many things on it!");
  alert("You can play against other players from around the world, and in tournaments. The game times vary from in the seconds to in the weeks! You can also play against computers of varying strengths.");
  alert("You can solve puzzles (do other puzzle related activities) and watch lessons.");
  alert("There is a lot more to do on Chess.com, so sign up for free!");
}

function displayAlertForLink5(){
  alert("This is a description for the website of the United States Chess Federation.");
  alert("You can sign up to get an official US Chess profile and ratings.");
  alert("You can play online events (which are rated) for free on websites such as Chess.com.");
  alert("You can also play national and local in-person events, which are also rated. You can compete for massive prizes, and for official titles.");
  alert("Sign up for US Chess to play in online and in-person events, get ratings, and more!");
}
function displayAlertForLink4(){
  alert("This is a description for a chess website called Kasparovchess.com.");
  alert("It is the chess website of former world champion (and widely believed best player of all time) Garry Kasparov.");
  alert("You can play against other players from around the world, and solve puzzles of varying theme and difficulty.");
  alert("There are a wide variety of lessons, and they are taught by many of the world's best players.");
  alert("In addition, there is a chess masterclass created by Garry Kasparov.");
  alert("There even more to do on Kasparovchess.com, so sign up for free!");
}
function displayAlertForLink2(){
  alert("This is a description for my own chess website.");
  alert("There are videos and puzzles on it.");
  alert("All of the content is organised in sections.");
  alert("The sections are 'how to play', 'openings', 'tactics', and 'endgames'.");
}
function displayAlertForLink3(){
  alert("This is a description for a chess website called 2700chess.com.");
  alert("Here, you can view live games and tournament results.");
  alert("You can also see live ratings, ratings from the past, all time records, and more. These can also be embedded into your own website.");
  alert("In addition, there are also detailed pages about every player, and many statistics to look at.");
  alert("Be sure to check out 2700chess.com!");
}

var text = "";
var websites = ["Chess.com", "2700chess.com", "Chess for Beginners and Intermediates - my own website", "Kasparovchess.com", "United States Chess Federation (US Chess)"];
for (let i = 0; i < websites.length; i++) {
  text += websites[i] + "<br>";
}
document.getElementById("websites").innerHTML = text;
var text1 = "";
var length = websites.length - 1;
for (let x = 0; x < length; x++){
  text1 += websites[x] + ", ";
}
text1 += "and " + websites[length] + ".";
var textFinal = "Look above at the links for more information about the websites " + text1;

function displayAlertSpecial(){
  alert(textFinal);
}
