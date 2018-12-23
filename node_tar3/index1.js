const experss = require('express')
const app = experss()
const port = process.env.PORT || 3000

app.get('/getAllUsers', (req, res) => res.json('allUsers'))
app.post('/products', (req, res) => res.json('products'))
app.put('/product', (req, res) => res.json('product'))

app.listen(port,
    () => console.log(`Epress server listening on port ${port}`))
