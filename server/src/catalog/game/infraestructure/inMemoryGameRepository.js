import GameRepository from '../domain/gameRepository';
import Game from '../domain/game';

const gameFactory = ({type, name}) => new Game({type, name});
const games = [
    gameFactory('dungeon-crawler', 'Gloomhaven'),
    gameFactory('euro', 'Terraforming Mars'),
    gameFactory('filler', 'Optimus')
]

const getGameBy = (property) => (value) => games.filter(game => game[property].toLowerCase() === value);
const getByName = getGameBy('name');
const getByType = getGameBy('type');

export default class InMemoryGameRepository extends GameRepository {
    get(id) {
        games.get(id)
    }

    getByName(name) {
        return getByName(name);
    }

    getByType(type) {
        return getByType(type);
    }
}