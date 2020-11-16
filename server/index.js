const createServer = require('./src/infraestructure/http/expressServer');
const {API_PORT} = process.env;

const init = async () => {
    try {
        await createServer(API_PORT);
        console.log(`Now listening for requests on port ${API_PORT} `);
    } catch (error) {
        console.log(`Something's wrong starting server in port ${API_PORT}`);
    }
}

init();
