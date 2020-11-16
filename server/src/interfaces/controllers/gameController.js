// Require UseCases

const gameController = {
    getByName(req, res, next) {
        return res.json({message: 'Hello World'});
    },

    getByType(req, res, next) {
        const {name} = req.params;
        return res.json({message: `Hello ${name}`});
    }
};

module.exports = gameController;
