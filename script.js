/* ==========================================
   INTRO ANIMATION
========================================== */

window.addEventListener("load", () => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 3000);
});

/* ==========================================
   BOOK LINKS
========================================== */

const books = {

    rebloomed: {
        amazon: "https://www.amazon.in/REBLOOMED-LOVE-Love-never-ended/dp/B0DPMJGRWZ",
        flipkart: "https://www.flipkart.com/rebloomed-love-never-ended/p/itm62ac9d2bfa3ac"
    },

    broken: {
        amazon: "https://www.amazon.in/Broken-Red-Cord-Tharun-K/dp/B0FDBK2KVG",
        flipkart: "https://www.flipkart.com/broken-red-cord/p/itm71e8e6001e0c1"
    }

};

/* ==========================================
   POPUP
========================================== */

const popup = document.getElementById("buyPopup");

const amazonBtn = document.getElementById("amazonLink");
const flipkartBtn = document.getElementById("flipkartLink");

const closeBtn = document.querySelector(".close-popup");

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

        if(index === 0){

            amazonBtn.href = books.rebloomed.amazon;
            flipkartBtn.href = books.rebloomed.flipkart;

        }

        else{

            amazonBtn.href = books.broken.amazon;
            flipkartBtn.href = books.broken.flipkart;

        }

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

/* ==========================================
   NAVBAR SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 40){

        header.style.background="rgba(0,0,0,.85)";
        header.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(0,0,0,.45)";
        header.style.boxShadow="none";

    }

});

/* ==========================================
   FADE IN ON SCROLL
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/* ==========================================
   FOOTER ANIMATION
========================================== */

const ending = document.getElementById("endingText");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                ending.innerHTML="The Beginning.";

            },2000);

        }

    });

},{
    threshold:.8
});

footerObserver.observe(document.querySelector("footer"));

/* ==========================================
   HERO IMAGE FLOAT
========================================== */

const heroImage=document.querySelector(".image-border");

let direction=1;

setInterval(()=>{

    heroImage.style.transform=`translateY(${direction*8}px)`;

    direction*=-1;

},1800);

/* ==========================================
   GOLD GLOW ON MOUSE
========================================== */

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth*100;
    const y=e.clientY/window.innerHeight*100;

    document.body.style.background=
    `radial-gradient(circle at ${x}% ${y}%,
    rgba(212,175,55,.05),
    #0b0b0b 45%)`;

});
