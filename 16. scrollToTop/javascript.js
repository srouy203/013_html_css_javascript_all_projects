var toTop=document.querySelector(".totop");
addEventListener("scroll", ()=>{
    if(pageYOffset>100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});