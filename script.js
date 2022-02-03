document.getElementById("image").addEventListener("click", displayAlert2);
document.getElementsByClassName("links").addEventListener("click", displayAlert);
function displayAlert(){
  alert("This link is taking you out of my website and to another link. The link will open in a new tab. Click OK to proceed to the website.");
}
function displayAlert2(){
  alert("This is an image of the black pieces on a chessboard.");
  alert("Look below for some chess links!");
}
