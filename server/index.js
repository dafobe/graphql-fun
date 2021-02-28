const createServer = require('./src/infrastructure/http/expressServer');
const {API_PORT, API_HOSTNAME} = process.env;

const init = async () => {
    try {
        await createServer({PORT: API_PORT, HOSTNAME: API_HOSTNAME});
        console.log(`Now listening for requests on port ${API_HOSTNAME}:${API_PORT} `);
    } catch (error) {
        console.log(`Something's wrong starting server in port ${API_PORT}`, error);
    }
}

init();
