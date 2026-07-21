// ================================
// Smooth Scroll Active Navigation
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ================================
// Floating Hero Image
// ================================

const heroImage = document.querySelector(".hero-image img");

let direction = 1;

setInterval(()=>{

    if(direction===1){

        heroImage.style.transform="translateY(-12px)";

    }else{

        heroImage.style.transform="translateY(0px)";

    }

    direction*=-1;

},2200);

// ================================
// Navbar Background on Scroll
// ================================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="rgba(0,0,0,.93)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.45)";

    }else{

        header.style.background="rgba(0,0,0,.75)";
        header.style.boxShadow="none";

    }

});

// ================================
// Book Card Hover Glow
// ================================

document.querySelectorAll(".book-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 70px rgba(212,175,55,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});
