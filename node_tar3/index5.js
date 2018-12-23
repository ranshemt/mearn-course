const experss = require('express')
const data = require("./data/music.json")

const app = experss()
const port = process.env.PORT || 3000

app.get('/getMusicName/:music_id',
  (req, res) => {
    console.log(`received: ${req.params.music_id}`) //just static
    res.status(200).json({ "music-name": data.name })
  })

app.listen(port, 
  () => console.log(`Epress server listening on port ${port}`))
