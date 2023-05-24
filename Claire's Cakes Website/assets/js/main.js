// JavaScript Document

let burgerButton = document.querySelector(".burger-menu-button");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;
 
burgerButton.onclick  = function () {
	if (!isBurgerOpen) {
		burgerMenu.style.display = "block";
		burgerButton.style.backgroundPosition = "center left 50px, center";
		isBurgerOpen = true;
	}
	else if (isBurgerOpen) {
		burgerMenu.style.display = "none";
		burgerButton.style.backgroundPosition = "center, center left 50px";
		isBurgerOpen = false;
	}
}


const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
         
        
    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
									  
										  
										  