// Express: 

var http    = require('http'),
    express = require('express'),
    app     = express();

//the get func receives a route and a callback func
app.get('/',function(req,res) {
    res.send('Hi');
});
http.createServer(app).listen(3000);
console.log("listening on port 3000");