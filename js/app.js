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
});

// Go to the linked element on click

const contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click",()=>{
    window.open("../static/style/style.css","_self");
});

// Down arrow animation after 3 seconds

const downButton = document.querySelector(".down-button");
let animation = false;

setInterval(() => {
    if (animation == false) {
        downButton.style.animation = "move 2s";
        animation = true;
    }else{
            downButton.style.animation = "none";
            animation = false;
    }
}, 3000);

// Down arrow animation after 3 seconds

