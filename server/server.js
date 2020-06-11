const express = require('express')
const server = express()
const path = require('path')
const PORT = process.env.PORT || 4500

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    next()
})

server.use('/api', require('./routes/botOne'))

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, '../client/build')))
server.use('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')))

server.use((err, req, res, next) => {
    res.status(500).send({ error: err })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))