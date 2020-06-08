const express = require('express')
const router = express.Router()
const { readFile } = require('../utils/readFile')
const { getData } = require('./functions')

router.get('/sudovyi-zbir', async (req, res, next) => {
    try {
        const apiData = await readFile(1)
        res.send(getData(apiData, {
            step: 3,
            target: 'pozevach'
        }))
    } catch (error) {
        next(error)
    }
})

module.exports = router