const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(express.static("public"))
app.get('/api/user', (req, res) => res.send('Hello World!'))
app.get('/api/blogs', (req, res) => res.json({
    message: "all blogs fetched",
    data: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app