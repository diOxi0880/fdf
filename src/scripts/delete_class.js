const elements = document.querySelectorAll('.burger_list');
function checkWindowSize() {
    elements.forEach(element => {
        if (window.innerWidth > 481) {
            element.classList.remove('burger_list');
        } else {
            element.classList.add('burger_list');
        }
    });
}
checkWindowSize();
window.addEventListener('resize', function() {
    checkWindowSize();
});

const elements2 = document.querySelectorAll('.burger_cell');
function checkWindowSize2() {
    elements2.forEach(element => {
        if (window.innerWidth > 481) {
            element.classList.remove('burger_cell');
        } else {
            element.classList.add('burger_cell');
        }
    });
}
checkWindowSize2();
window.addEventListener('resize', function() {
    checkWindowSize2();
});
