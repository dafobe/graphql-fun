import error from '../../shared/errors/methodNotImplemented';

export default class GameRepository {
    get() {
        error('get');
    }

    getById() {
        error('getById');
    }
}