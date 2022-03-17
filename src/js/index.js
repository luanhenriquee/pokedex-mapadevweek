const menuPokemon = document.querySelectorAll('.pokemon');
const cardPokemon = document.querySelectorAll('.card-pokemon');
const sound = document.createElement('audio');

const elementCard = cardPokemon[0].firstElementChild;
const bgCard = window.getComputedStyle(elementCard).backgroundColor;
menuPokemon[0].style.backgroundColor = bgCard;

function removeActive () {
    const menuActive = document.querySelector('.active');
    menuActive.classList.remove('active');
    menuActive.style.backgroundColor = '#6B727A';
}

function removeOpen () {
    const cardOpen = document.querySelector('.open');
    cardOpen.classList.remove('open');
}

menuPokemon.forEach((pokemon, index) => {
    pokemon.addEventListener('click', () => {
        if (index == 9) {
            sound.src = "/src/sounds/sound-pikachu.mp3";
        } else {
            sound.src = "/src/sounds/sound-button.mp3";
        }
        sound.play();
        removeActive();
        pokemon.classList.add('active');
        const elementCard = cardPokemon[index].firstElementChild;
        const bgCard = window.getComputedStyle(elementCard).backgroundColor;
        pokemon.style.backgroundColor = bgCard;
        removeOpen();
        cardPokemon[index].classList.add('open');
    });
});

