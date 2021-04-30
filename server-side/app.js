const express = require('express')
const app = express()
const cors = require('cors')
const pgp =require('pg-promise')()
const connectionString="postgres://localhost:5432/nutrifyme"
const db = pgp(connectionString)
var bcrypt = require('bcryptjs')
const session = require('express-session')

app.use(express.json())
app.use(cors())




// Setting up session
app.use(session({
    secret: 'handmeabeer',
    saveUnintialized: true
}))




// Registration and Encryption 
app.post('/login'), (req, res) =>{
    const username = req.body.username
    const password = req.body.password

    bcrypt.genSalt(10, function(error,salt){
        bcrypt.hash(password,salt,function(error, hash) {
            if(!error) {
                db.none('INSERT INTO users(username,password)VALUES(1$,2$)',[username,hash])
                .then(()=>{
                    console.log('SUCCESS')
                }).catch(error=> console.log(error))

            }
        })
    })

   
}

// Launch Server
app.listen(8080, () => {
    console.log('Server is running...')
})