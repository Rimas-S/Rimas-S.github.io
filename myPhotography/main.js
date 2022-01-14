document.getElementById("btn-main").onclick = function () {
    window.scrollTo(0,window.innerHeight);
}
// Scroll top button //
mybutton = document.getElementById("scroll-btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

document.getElementById("scroll-btn").onclick = function () {
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}