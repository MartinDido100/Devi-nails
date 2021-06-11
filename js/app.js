//Gallery code

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		width : '80%',
		height: '800px',
        rewind: true,
        cover: true,
        autoplay:true,
        interval: 6000,
        pauseOnHover: false,
	} ).mount();
} );

//Gallery code

//Enables clickable social icon container

const socialsContainer = document.querySelectorAll(".footer-li-social");
let socials = [];

socialsContainer.forEach(element => {
    element.addEventListener("click",()=>{
        window.open(element.firstChild.href);
    })
});

//Enables clickable social icon container

// Shows course on hover

const coursesContainer = document.querySelector(".courses-container")
const coursesButton = document.querySelector(".courses");
const coursesHiddenScreen = document.querySelector(".nav-li-ul");
const courseItems = document.querySelectorAll(".nav-li-ul-item");

coursesButton.addEventListener("mouseover",()=>{
    coursesHiddenScreen.style.opacity = "1";
    courseItems.forEach((x) =>{
        x.style.cursor = "pointer";
    });
});


coursesContainer.addEventListener("mouseleave",()=>{
    coursesHiddenScreen.style.opacity = "0";
    courseItems.forEach((x) =>{
        x.style.cursor = "initial";
    });
})

// Shows course on hover

// Go to the linked element on click

window.addEventListener("beforeunload",()=>{
    window.scrollTo(0,0);
})

const navItems = document.querySelectorAll(".nav-li:not(#courses-button)");

navItems.forEach(x =>{
    x.addEventListener("click",()=>{
        document.querySelector(`.${x.getAttribute("link-to")}`).scrollIntoView({behavior:"smooth",block:"center"});
        body.style.overflow = "scroll"
    })
})

// Go to the linked element on click

const contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click",()=>{
    window.open("../static/style/style.css","_self");
})