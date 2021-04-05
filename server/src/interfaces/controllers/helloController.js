// Require UseCases

export const helloController = {
    sayHello(req, res, next) {
        return res.json({message: 'Hello World'});
    },

    sayHelloPerson(req, res, next) {
        const {name} = req.params;
        return res.json({message: `Hello ${name}`});
    }
};

// module.exports = helloController;
