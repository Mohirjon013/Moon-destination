let elHumbergerBtn = document.querySelector(".header__btn");
let elModalOuter = document.querySelector(".modal-outer");
let elModalInner = document.querySelector(".modal-inner");
let elCloseBtn = document.querySelector(".modal-inner__btn");
let elHeaderBtn = document.querySelector(".header__btn-img");




elHumbergerBtn.addEventListener("click", function(){
    elModalOuter.classList.add("show-outer");
    elModalInner.classList.add("show-inner");
    elHeaderBtn.classList.add("hide-btn");
    document.body.classList.add("no-scroll");
    
})
elCloseBtn.addEventListener("click", function(){
    elModalOuter.classList.remove("show-outer");
    elModalInner.classList.remove("show-inner");
    elHeaderBtn.classList.remove("hide-btn");
    document.body.classList.remove("no-scroll");
    
})
elModalOuter.addEventListener("click", function(evt){
    if(evt.target.id == "modal-outer"){
        elModalOuter.classList.remove("show-outer");
        elModalInner.classList.remove("show-inner");
        elHeaderBtn.classList.remove("hide-btn");
        document.body.classList.remove("no-scroll");
    }
})