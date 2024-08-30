class RickAndMortyService {
	constructor() {
        this.apiBaseUrl='https://rickandmortyapi.com/api/character';
    }

    async getAllCharacters() {
        try{
            const response = await fetch(this.apiBaseUrl);

            if (!response.ok){
                throw new Error('Error al obtener los datos.');
            }

            const data=await response.json();

            const mispersonajes=data.results.map(character => ({
                "name": character.name,
                "status": character.status,
                "species": character.species,
                "location": character.location.name,
                "image": character.image,
            })); 

            return mispersonajes;

        }
	    catch (error) {
            console.error('Hubo un problema al obtener los personajes', error);
            return[];
        }
    }
}

export default RickAndMortyService;
