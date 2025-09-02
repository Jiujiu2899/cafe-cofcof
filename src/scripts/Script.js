// add active class to the current nav-links (highlight it)
// use className
/*

let header = document.getElementById("myNav");
let btns = header.getElementsByClassName("nav-links-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

*/

// use classList

let header = document.getElementById("myNav");
let btns = header.getElementsByClassName("nav-links-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}
