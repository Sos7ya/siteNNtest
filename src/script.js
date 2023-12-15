const burgerMenu = document.querySelectorAll('#burger-menu');
const navigation = document.querySelector('#navigation');
const logo = document.querySelector('#logo');
burgerMenu.forEach(item => item.addEventListener('click', () => {
    logo.classList.toggle('hiden');
    navigation.classList.toggle('active');
}));