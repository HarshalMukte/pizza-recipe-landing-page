let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menu_icon")
let social_media = document.getElementById("social_media");

menuIcon.addEventListener("click", () => {
    active();


    window.ondblclick = function(event) {

        if (event.target = menu.classList.contains("active")) {
     
           active();
     
         }
    
     }

});
   

function active(){
    menu.classList.toggle("active");
    social_media.classList.toggle("active");
}



// go to top button 

const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}