const express = require('express')
const { urlencoded } = require('express')
const app = express()
const db = require('./db')
const path = require('path')
app.use(express.json())
app.use(urlencoded({extended:true}))
app.set("view engine", "hbs")

app.use("/pages",require('./routes/pages').route)
app.use("/api",require('./routes/api').route)
app.use("/",express.static(path.join(__dirname,'public_static')))
app.listen(3000, ()=>{
    console.log('Server started at https"//localhost:3000')
})

