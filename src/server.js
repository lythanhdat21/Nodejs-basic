// const express = require('express')
import express from 'express'
import configViewEngine from './configs/viewengine'
import initWebRoute from './route/web'
import connection from './configs/connectDB'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;
// console.log(">>> check port", port)

//setup view engine
configViewEngine(app)

//init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

