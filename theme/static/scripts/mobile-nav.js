function setMobileNavBehaviour() {
    var mobileBtnOpen = document.getElementsByClassName('open-menu')[0],
        mobileBtnClose = document.getElementsByClassName('close-menu')[0],
        mobileMask = document.getElementById("mobile-mask");
        links = document.querySelectorAll('.topnav a[href^="#"]');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(){
            closeMenu();
        });
    }

    mobileBtnOpen.addEventListener('click', function(){
        openMenu(mobileMask);
    });

    mobileBtnClose.addEventListener('click', function(){
        closeMenu(mobileMask);
    });
}

function closeMenu(menu){
    menu.style.top = '-100%';
}

function openMenu(menu){
    menu.style.top = 0;
}
