const chalk = require('chalk');
const axios = require('axios');
const { urls, getHeaders, setPostData } = require('./config');


async function startFarming(authQuery, _data) {
    const data = setPostData(authQuery, _data);
    return await axios.post(urls.startFarming, data, { headers: getHeaders() }).then((res) => {
        const { started_at } = res.data;
        started_at ? logFarming(res.data) : false;
    }).catch((error) => {
        console.log(chalk.red(error?.response?.data?.message));
    });
}

async function claimFarm(authQuery) {
    const data = setPostData(authQuery);
    return await axios.post(urls.claim, data, { headers: getHeaders() }).then((res) => {
        const { username } = res.data;
        username ? logFarmClaim() : false;
        username ? startFarming(authQuery, {'startedAt': 0}) : exitProcess();
    }).catch((error) => {
        console.log(chalk.red(error?.response?.data?.message));
    });
}

function logInfo(obj) {
    console.log(
        'User:', chalk.green(obj?.username),
        '| Points:', chalk.yellow(obj?.points.toLocaleString())
    );
}

function logFarming(data) {
    console.log(
        'Farming ... :', chalk.green('\u2714'),
        '| Farm Started At:', chalk.yellow(dateFromTimestamp(data?.started_at))
    );
}

function logFarmClaim() {
    console.log(
        'Farm Claiming ... :', chalk.green('\u2714'),
    );
}

function exitProcess() {
    console.log(chalk.red('Error || Completed. Exiting...'));
    process.exit(); //end the process
}

module.exports = { claimFarm, logInfo, exitProcess }
