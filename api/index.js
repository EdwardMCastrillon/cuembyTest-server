import express from 'express'

import leaguesCtrl from '../controllers/leagues'

const router = express.Router()

router.get('/leagues', async (req, res) => {
    const data = await leaguesCtrl.getAll();
    res.send(data)
    res.end()
})

export default router