const experss = require('express')
const app = experss()
const port = process.env.PORT || 3002

app.use(experss.json())
app.use(experss.urlencoded({extended: true}))

app.post('/savemusic', 
  (req, res) => {
    const { songs = [] } = req.body
    console.log('Songs are:', songs)
    res.json({ success: 1 })
  })

app.post('/users/:id', 
  (req, res) => {
    const { id } = req.params
    const { username } = req.body
    const { color = 'blue' } = req.query

    console.log(`post: ${username}`)
    res.json({ username, id })
  })

app.listen(port, 
  () => console.log(`Epress server listening on port ${port}`))
