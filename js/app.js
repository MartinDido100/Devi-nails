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

//Click en contenedor

const socialsContainer = document.querySelectorAll(".footer-li-social");
let socials = [];

socialsContainer.forEach(element => {
    element.addEventListener("click",()=>{
        window.open(element.firstChild.href);
    })
});