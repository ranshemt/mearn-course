const experss = require('express')
const app = experss()
const port = process.env.PORT || 3000

app.use(experss.json())
app.use(experss.urlencoded({extended:true}))

app.post('/savemusic', 
  (req, res) => {
    const { songs = [] } = req.body
    console.log('Songs are:', songs);
    res.json({ success: 1 });
  });

app.listen(port, 
  () => console.log(`Epress server listening on port ${port}`))
