const fs = require('fs')

const BOT_ONE = './api/botOne/apiData.json'
const BOT_TWO = '../api/botOne/apiData.json'

module.exports.readFile = (bot) => {
    return new Promise((resolve, reject) => {
        switch (bot) {
            case 1:
                fs.readFile(BOT_ONE, 'utf8', (err, data) => {
                    if (err) {
                        reject(`Error reading API file: ${err}`)
                    } else {
                        resolve(JSON.parse(data))
                    }
                })
                break
            case 2:
                fs.readFile(BOT_ONE, 'utf8', (err, data) => {
                    if (err) {
                        reject(`Error reading API file: ${err}`)
                    } else {
                        resolve(JSON.parse(data))
                    }
                })
                break
            default:
                break
        }
    })
}