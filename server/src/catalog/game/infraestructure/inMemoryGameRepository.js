import gameFactory from '../domain/game.js';

const games = [
    gameFactory({type: 'dungeon-crawler', name: 'Gloomhaven'}),
    gameFactory({type: 'euro', name: 'Terraforming Mars'}),
    gameFactory({type: 'filler', name: 'Optimus'})
]

const getGameBy = (property) => (value) => games.filter(game => game[property].toLowerCase() === value);
const getByName = getGameBy('name');
const getByType = getGameBy('type');

export default {
    get(id) {
        return Promise.resolve(games[id])
    },

    getByName(name) {
        return getByName(name);
    },

    getByType(type) {
        return getByType(type);
    }
}