const baseUrl = 'https://api.gleam.bot';

const urls = {
    auth: `${baseUrl}/auth`,
    claim: `${baseUrl}/claim`,
    startFarming: `${baseUrl}/start-farming`,
}

function setPostData(authQuery, data={}) {
    return { ...data, 'initData': authQuery, 'project': 'Aqua Protocol' }
}

function getHeaders(headers = {}) {
    return {
        'Accept': 'application/json, text/plain, */*',
        'Sec-Fetch-Site': 'same-site',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Mode': 'cors',
        // 'ngrok-skip-browser-warning': '69420',
        'Origin': 'https://aquaprotocol.gleam.bot',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'Referer': 'https://aquaprotocol.gleam.bot/',
        'Content-Type': 'application/json',
        'Sec-Fetch-Dest': 'empty'
    };
}

module.exports = { urls, setPostData, getHeaders }
