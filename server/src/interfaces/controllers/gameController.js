// Require UseCases
import {factory as workflowFactory} from '../../catalog/game/application/workflowFactory';

export const getById = (req, res, next) => {
    // extract id from request
    // call workflow with id
    const getGameByIdWorkflow = workflowFactory('getById');

    return res.json({game: 'game id'});
};

export const gameController = {
    getById(req, res, next) {
        const workflow = workflowFactory('getById')
    },
    getByName(req, res, next) {
        return res.json({message: 'Hello World'});
    },
    getByType(req, res, next) {
        const {name} = req.params;
        return res.json({message: `Hello ${name}`});
    }
};