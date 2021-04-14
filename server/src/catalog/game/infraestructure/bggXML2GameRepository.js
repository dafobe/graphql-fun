import gameFactory from '../domain/game.js';
import {get} from '../../shared/infrastructure/http.js';
export const repositoryFactory = ({mapper}) => ({
    async get(id) {
        const response = await get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${id}`, {
            headers: {
            'Content-Type': 'text/xml; charset="UTF-8"'
          },
        });
        const xml = await response.text();
        const game = mapper(xml);

        console.log(game);
        return Promise.resolve(game)
    },
    async getByName(name) {
        return getByName(name);
    },
    async getByType(type) {
        return getByType(type);
    }
})