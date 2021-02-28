import errorNoImplemented from '../../../shared/errors/methodNoImplemented';

export default class GameRepository {
    get() {
        errorNoImplemented('[GameRepository#get]');
    }

    getById() {
        errorNoImplemented('[GameRepository#getById]');
    }

    getByType() {
        errorNoImplemented('[GameRepository#getByType]');
    }
}