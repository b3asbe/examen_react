const logo = document.querySelector('.logo img');

function enlargeLogo() {
    logo.classList.add('enlarge');
}

function restoreLogo() {
    logo.classList.remove('enlarge');
}

logo.addEventListener('mouseover', enlargeLogo);
logo.addEventListener('mouseout', restoreLogo);