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
// document.addEventListener("mouseup", () => {
//     if(menu.classList.contains("active")){
//         active();
//     }
// })


// window.onclick = function(event) {

//     if (event.target == images_modal) {
 
//        images_modal.style.display = "none";
 
//      }
 
//      if (event.target == videos_modal) {
 
//        videos_modal.style.display = "none";
 
//      }
 
//  }
// window.onclick = function(event) {

//     if (event.target != menuIcon) {
 
//        active();
 
//      }

//  }