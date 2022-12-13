let toggleBtn= document.querySelector("#toggleBtn");
let aside= document.querySelector("aside");

toggleBtn.onclick = () => {
    if(aside.classList.contains('active')){
        aside.classList.remove("active");
    }else{
        aside.classList.add("active");
    }
};
