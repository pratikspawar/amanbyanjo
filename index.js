var len=document.querySelectorAll(".drum").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function onclick() {
    var button1=this.innerHTML;
    soundmaker(button1);
    buttonAnimation(button1);
  });
}
document.addEventListener("keypress",function(event){
  soundmaker(event.key);
  buttonAnimation(event.key);
})
function soundmaker(key) {
  switch (key) {
    case "w":
      var aud= new Audio("sounds/tom-1.mp3");
      aud.play();
      break;
    
      case "a":
      var aud= new Audio("sounds/tom-2.mp3");
      aud.play();
      break;
      case "s":
      var aud= new Audio("sounds/tom-3.mp3");
      aud.play();
      break;
      case "d":
      var aud= new Audio("sounds/tom-4.mp3");
      aud.play();
      break;
      case "j":
      var aud= new Audio("sounds/snare.mp3");
      aud.play();
      break;
      case "k":
      var aud= new Audio("sounds/crash.mp3");
      aud.play();
      break;case "l":
      var aud= new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;
    default:
      alert("Enter correct key");
      break;
  }
  
}
function buttonAnimation(key) {
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  },100)
}