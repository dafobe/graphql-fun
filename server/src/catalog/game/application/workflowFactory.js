import {getGameById} from './getGameByIdWorkflow.js';

export const factory = (type) => {
    switch (type) {
        case 'getById':
            return getGameById;
        default:
            throw new Error('workflow type not found')
    }
}