const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

};

prevBtn.onclick=()=>{

    currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length;

    lightboxImg.src=galleryImages[currentIndex].src;

};

nextBtn.onclick=()=>{

    currentIndex=(currentIndex+1)%galleryImages.length;

    lightboxImg.src=galleryImages[currentIndex].src;

};

window.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", () => {

    let value = searchBox.value.toLowerCase();

    galleryImages.forEach(img => {

        let text = img.alt.toLowerCase();

        if (text.includes(value)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

    });

});

const buttons=document.querySelectorAll(".buttons button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

let category=button.innerText;

galleryImages.forEach(img=>{

if(category==="All" || img.dataset.category===category){

img.style.display="block";

}
else{

img.style.display="none";

}

});

});

});

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

if(e.key==="Escape"){

lightbox.style.display="none";

}

}

});