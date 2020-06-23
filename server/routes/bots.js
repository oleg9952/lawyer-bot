const express = require('express')
const router = express.Router()
const { readFile } = require('../utils/readFile')
const { getDataSpravy } = require('../utils/spravy')
const { getDataDocuments } = require('../utils/documents')

router.get('/spravy', async (req, res, next) => {
    try {
        const apiData = await readFile(1)
        res.send(JSON.stringify(getDataSpravy(apiData, {
            step: parseInt(req.query.step),
            selection: req.query.selection
        })))
    } catch (error) {
        next(error)
    }
})

router.get('/documents', async (req, res, next) => {
    try {
        const apiData = await readFile(2)
        res.send(JSON.stringify(getDataDocuments(apiData, {
            step: parseInt(req.query.step),
            selection: req.query.selection
        })))
    } catch (error) {
        next(error)
    }
})

module.exports = router