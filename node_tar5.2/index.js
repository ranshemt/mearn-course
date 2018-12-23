const express = require('express')
const morgan = require('morgan')

const ctrl = require('./controller')
const asyncWrapper = require('./async.wrapper')

const app = express()
const port =  process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/posts',    asyncWrapper(ctrl.getAllPosts))
app.get('/post/:id', asyncWrapper(ctrl.getPost))
app.put('/post/:id', asyncWrapper(ctrl.editPost))
app.post('/post',    asyncWrapper(ctrl.addPost))
app.post('/remove',  asyncWrapper(ctrl.removePost))

app.listen(port, 
    () => console.log('Express server ready for requests on:', port))
