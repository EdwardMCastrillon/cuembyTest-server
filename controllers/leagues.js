import request from 'async-request'


async function getAll() {
    const api_url = "http://api.football-data.org/v1/soccerseasons"
    try {
        let response
        response = await request(api_url)
        return response.body
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    getAll: getAll
}