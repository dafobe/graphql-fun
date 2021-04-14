import gameFactory from '../domain/game.js';
import {get} from '../../shared/infrastructure/http.js';
export const repositoryFactory = ({mapper}) => ({
    async get(id) {
        const response = await get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${id}`);
        const xml = await response.text();
        const game = mapper(xml);

        console.log(game);
        return Promise.resolve(gameFactory({name: `game-${id}`}))
    },
    async getByName(name) {
        return getByName(name);
    },
    async getByType(type) {
        return getByType(type);
    }
})