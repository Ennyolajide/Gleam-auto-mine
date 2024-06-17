require('dotenv').config();
const axios = require('axios');
const { urls, setPostData, getHeaders } = require('./config.js');
const { claimFarm, logInfo, exitProcess } = require('./requests.js');

const env = process.env;
const authQuery = env.AUTH_QUERY;

async function main() {
    axios.post(urls.auth, setPostData(authQuery), { headers: getHeaders() })
        .then((res) => {
            const { username } = res.data;
            username ? logInfo(res.data) : false;
            username ? claimFarm(authQuery) : exitProcess();
        })
        .catch(error => {
            console.log(error);
            exitProcess();
        });
}

main();