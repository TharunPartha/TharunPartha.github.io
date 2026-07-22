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
/* ==========================================
BOOKSHELF
========================================== */

document.querySelectorAll(".book-spine").forEach(book=>{

book.addEventListener("click",()=>{

alert(
"This recommendation panel will become an animated book card in Version 3."
);

});

});
/* ==========================================
   SMOOTH SCROLL ACTIVE NAV
========================================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".buy-btn,.primary-btn,.secondary-btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth,this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = (e.offsetX-size/2)+"px";
        circle.style.top = (e.offsetY-size/2)+"px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },700);

    });

});


/* ==========================================
   PARALLAX HERO IMAGE
========================================== */

window.addEventListener("mousemove",(e)=>{

    const img=document.querySelector(".image-border");

    if(!img) return;

    let x=(window.innerWidth/2-e.clientX)/45;
    let y=(window.innerHeight/2-e.clientY)/45;

    img.style.transform=`translate(${x}px,${y}px)`;

});


/* ==========================================
   RANDOM QUOTES
========================================== */

const quotes=[

"Stories That Stay With You.",

"Every ending hides another beginning.",

"Some pages are impossible to forget.",

"Books preserve emotions that words alone cannot."

];

const heroSmall=document.querySelector(".hero-small");

if(heroSmall){

let i=0;

setInterval(()=>{

i=(i+1)%quotes.length;

heroSmall.style.opacity=0;

setTimeout(()=>{

heroSmall.innerHTML=quotes[i];

heroSmall.style.opacity=1;

},300);

},4500);

}


/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn=document.createElement("div");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";
topButton.style.pointerEvents="auto";

}else{

topButton.style.opacity="0";
topButton.style.pointerEvents="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};


/* ==========================================
   YEAR
========================================== */

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Tharun K • All Rights Reserved`;

}
