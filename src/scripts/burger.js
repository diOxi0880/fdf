const activeSvgList = document.querySelector('.burger_image');
const hiddenDivList = document.querySelector('.burger_list');
const hiddenUlList = document.querySelector('.header__list');

activeSvgList.addEventListener('click', function (event) {
    event.stopPropagation();
    const burgerImage = activeSvgList.querySelector('img');
    const computedStyle = window.getComputedStyle(hiddenDivList);

    if (computedStyle.visibility === 'hidden') {
        hiddenDivList.style.visibility = 'visible';
        burgerImage.setAttribute('src', 'images/burger/burger_menu_cross.svg');
    } else {
        hiddenDivList.style.visibility = 'hidden';
        burgerImage.setAttribute('src', 'images/burger/burger_menu.svg');       
    }
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!hiddenDivList.contains(targetElement) && targetElement !== activeSvgList && window.innerWidth < 481) {
        hiddenDivList.style.visibility = 'hidden';
        const burgerImage = activeSvgList.querySelector('img');
        burgerImage.setAttribute('src', 'images/burger/burger_menu.svg');
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 481) {
        hiddenUlList.style.visibility = 'visible';
    } else {
        hiddenUlList.style.visibility = 'hidden';
    }
});
