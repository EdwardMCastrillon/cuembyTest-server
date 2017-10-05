import express from 'express'

import leaguesCtrl from '../controllers/leagues'

const router = express.Router()

router.get('/leagues', async (req, res) => {
    const data = await leaguesCtrl.getAll();
    res.send(data)
    res.end()
})

router.post('/leagues/extraData', async (req, res) => {
    const teamsUrl = req.body.teamsUrl
    const tableUrl = req.body.tableUrl
    const data = await leaguesCtrl.getExtras(teamsUrl, tableUrl)
    res.json(data)
    res.end()
})

export default router