let togglebtn = document.getElementById('toggle-menu');
let navUl = document.getElementById('nav-ul');

togglebtn.onclick = function () {
    navUl.classList.toggle('open');
}
document.addEventListener("click",(e) => {
    if(e.target !== togglebtn && e.target !== navUl){

    }
});

