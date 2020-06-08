const express = require('express')
const router = express.Router()
const { readFile } = require('../utils/readFile')

router.get('/sudovyi-zbir', async (req, res, next) => {
    try {
        const apiData = await readFile(1)

    } catch (error) {
        next(error)
    }
})

module.exports = router