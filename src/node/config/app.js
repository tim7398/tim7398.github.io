import express from 'express'
import router from './routing'
import security from './security'

var app = express()

app.use('/', security)
app.use('/', router)

export default app