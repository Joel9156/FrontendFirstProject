// function for write text and delete
(function(){
    const spanEL = document.querySelector("main h2 span")
const txtArr = [`Web Publisher`, `Front-End Developer`, `Web UI Designer`, `UX Designer`, `Back-End Developer`];
let index=0;
let currentTxt = txtArr[index].split("");
function writeText(){
    spanEL.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeText, Math.floor(Math.random()*100));
    }
    else{
        currentTxt = spanEL.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    console.log(currentTxt.pop());
    spanEL.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
    }
    else{
        index = (index+1) %txtArr.length;
        currentTxt = txtArr[index].split("");
        writeText();
    }
}
writeText();

})();

const haederEl =document.querySelector("header");
window.addEventListener("scroll", function(){
    this.requestAnimationFrame(scrollCheck);
}); 
function scrollCheck(){
    const breowserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(breowserScrollY > 0){
        haederEl.classList.add("active");
    }
    else{
        haederEl.classList.remove("active");
    }   
};

const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY =  window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior:"smooth"});
};
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i=0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
        animationMove(this.dataset.target);
}); 
} 