const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const authRoutes = require('./Routes/auth')

var app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false }))
app.use(cors())

app.use('/auth' , authRoutes)

mongoose.connect('mongodb://localhost:9000/user' ,  {useUnifiedTopology : true , useNewUrlParser : true })
.then( () => {
	console.log('server has running')

	app.listen('4000')
}).catch(err => {
	console.log(err)
})

