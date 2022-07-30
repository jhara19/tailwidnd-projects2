const hamburger = document.querySelector("#shifa");
const menu = document.querySelector("#safa");
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
});