const experss = require('express')
const app = experss()
const port = process.env.PORT || 3000

app.use('/public', experss.static(`${__dirname}/public`));

app.all('*',
    (req, res, next) => {
        console.log('logged in');
        //if db returns true- next(). if false- send err msg:login failed
        req.next();
    });

app.get('/myprofile',
    (req, res) => {
        res.send(`<!doctype html><html>
                <head><title></title>
                <link href="public/style.css" rel="stylesheet"></head>
                <body style="background:#44619d">
                  <h1>Welcome!</h1>
                </body></html>`);
    });

app.get('/', (req, res) => res.json('index.html'))
app.post('/products', (req, res) => res.json('products.html'))
app.put('/product', (req, res) => res.json('product.html'))

app.listen(port, () => console.log(`Epress server listening on port ${port}`))