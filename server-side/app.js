const express = require('express')
const app = express()
const cors = require('cors')
const pgp =require('pg-promise')()
const connectionString="postgres://localhost:5432/nutrifyme"
const db = pgp(connectionString)
var bcrypt = require('bcryptjs')

const PORT = process.env.PORT || 8080 
app.use(express.json())
app.use(cors())


// Routes 
const UsersRouter = require('./routes/users')
app.use('/users', UsersRouter)

const ProfilesRouter = require('./routes/profiles')
app.use('/profiles', ProfilesRouter)






   


// Launch Server
app.listen(PORT, () => {
    console.log('Server is running...')
})