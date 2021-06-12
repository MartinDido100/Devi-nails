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

// Go to top onlad

window.addEventListener("beforeunload",()=>{
    window.scroll(0,0);
});

// Go to top onlad

const contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click",()=>{
    window.open("../static/style/style.css","_self");
});

// Down arrow events

const downButton = document.querySelector(".down-button");

setInterval(() => {
    downButton.style.animation = "move 1.5s";
    downButton.addEventListener("animationend",()=> {
        downButton.style.animation = "none";
    });
}, 3000);


downButton.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scroll({
        top: 800,
        behavior:"smooth"
    });
})


// Down arrow events

//Go to up

const upButton = document.querySelector(".up-button");


window.addEventListener("scroll",()=>{
    if (window.scrollY >= 800) {
        upButton.style.opacity = "1";
        upButton.style.cursor = "pointer";
        upButton.style.pointerEvents = "all";
    }else{
        upButton.style.opacity = "0";
        upButton.style.cursor = "initial";
        upButton.style.pointerEvents = "none";
    };
    enableUpbutton();
});


const enableUpbutton = () =>{
        upButton.addEventListener("click",()=>{
            window.scroll({
            top:0,
            behavior:"smooth"
            });
        });
}
