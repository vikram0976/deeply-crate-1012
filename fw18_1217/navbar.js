
document.getElementById('night').addEventListener('click',function(){
    document.getElementById('night').innerHTML=null
    let navbar=document.getElementById('navbar');
    navbar.style.backgroundColor="#1d1e1f";
    let img=document.createElement('img')
    img.src="https://ak.picdn.net/shutterstock/videos/1021489846/thumb/2.jpg"
    document.getElementById('night').append(img)
})
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}