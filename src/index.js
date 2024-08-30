import RickAndMortyService from './service.js';
import heartSVG from './assets/heart.svg'
import liveSVG from './assets/live.svg'
import raceSVG from './assets/race.svg'
import planetSVG from './assets/planet.svg'

const service = new RickAndMortyService();

async function createCharacterList() {
    const container = document.querySelector('.character-list'); 

    const characters = await service.getAllCharacters();

    characters.forEach(character => {
        const characterCard = createCharacterCard(character);
        container.insertAdjacentHTML('beforeend', characterCard);
    });
}

function createCharacterCard(character) {
    return `
        <div class="character-card">
            <img src="${character.image}" alt="${character.name}">
            <img src="${heartSVG}" class="heart-icon" id="heart" data-name="${character.name}">
            <div class="character-info">
                <p id="nombre">${character.name}</p>
                <p><img src="${liveSVG}" class="icon">${character.status}</p>
                <p><img src="${raceSVG}" class="icon">${character.species}</p>
                <p><img src="${planetSVG}" class="icon">${character.location}</p>
            </div>
        </div>
    `;
}

function addCharacterListeners() {
    document.querySelectorAll('.heart-icon').forEach(heartIcon => {
        heartIcon.addEventListener('click', () => {
            const characterName = heartIcon.getAttribute('data-name');
            alert(`Hola soy ${characterName}, recuerda que puedes obtener más información sobre mí!`);
        });
    });
}

createCharacterList().then(addCharacterListeners);
