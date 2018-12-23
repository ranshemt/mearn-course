const experss = require('express')
const morgan = require('morgan')
const app = experss()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(experss.json())
app.use(experss.urlencoded({extended: true}))

app.get('/playMusic/:music_id', (req, res) => {
    const { music_id = null } = req.params
    console.log('music id is', music_id);
    res.send(
        `<!doctype html><html>
        <head>
            <title>${music_id}</title>
        </head><body><h1>Hello :)</h1></body></html>`
    )
})

app.listen(port, 
    () => console.log(`Epress server listening on port ${port}`))
