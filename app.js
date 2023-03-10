const menuBtn = document.querySelector('#menu_button');
const menu = document.querySelector('#menu');
const clickedElements = document.querySelectorAll('.clicked_element');
const modalWindowContainer = document.querySelector('#modal_window_container');
const cancelButton = document.querySelector('#cancel_button');


document.addEventListener('click', (e) => {
    if(e.target == menuBtn){

        menuBtn.classList.toggle('menu_button_active');

        if(menuBtn.classList.contains('menu_button_active')){
            menu.style.height = '160px';
            menu.style.borderBottom = '1px solid rgb(80, 35, 20)';
        }else{
            menu.style.height = '0px';
            menu.style.borderBottom = 'none';
    }
    }else{
        menuBtn.classList.remove('menu_button_active');
        menu.style.height = '0px';
        menu.style.borderBottom = 'none';
    }

    for (everyItem of clickedElements) {
        if (e.target == everyItem) {
            modalWindowContainer.style.display = 'flex';
        }
    }

    if (e.target == cancelButton) {
        modalWindowContainer.style.display = 'none';
    }
});



