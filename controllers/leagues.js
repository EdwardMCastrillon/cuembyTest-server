import request from 'async-request'


async function getAll() {
    const api_url = "http://api.football-data.org/v1/soccerseasons"
    try {
        let response
        response = await request(api_url, {
            headers: {
                "X-Auth-Token": "cc58a556888c40dfa0b16b9dc743e7dc"
            }
        })
        return response.body
    } catch (e) {
        throw new Error(e)
    }
}

async function getExtras(teamsUrl, tableUrl) {
    try {
        let response = {}, req
        req = await request(teamsUrl, {
            headers: {
                "X-Auth-Token": "cc58a556888c40dfa0b16b9dc743e7dc"
            }
        })
        response.leagueTeams = JSON.parse(req.body)
        req = await request(tableUrl, {
            headers: {
                "X-Auth-Token": "cc58a556888c40dfa0b16b9dc743e7dc"
            }
        })
        response.leagueTable = JSON.parse(req.body)
        return response
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    getAll: getAll,
    getExtras: getExtras
}