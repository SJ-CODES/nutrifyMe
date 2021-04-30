const express = require('express')
const app = express()
const cors = require('cors')
const pgp =require('pg-promise')()
const connectionString="postgres://localhost:5432/nutrifyme"
const db = pgp(connectionString)
var bcrypt = require('bcryptjs')


app.use(express.json())
app.use(cors())






app.get('/register', (req,res) => {
    res.send("Hello")
})


// Registration and Encryption 
app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)
    bcrypt.genSalt(10, function(error,salt) {
        bcrypt.hash(password,salt,function(error, hash) {
            if(!error) {
                db.none('INSERT INTO users(username,password) VALUES($1,$2)',[username,hash])
                .then(()=>{
                    res.json({success:true})
                }).catch(error=> console.log(error))

            }
        })
    })
})

//Login 

app.post('/login', async (req, res) =>{
    const username = req.body.username
    const password = req.body.password


   
    const user = await db.one(`SELECT * FROM users WHERE username = $1`, [username])
        
  console.log(user)
  const isvalid = await bcrypt.compareSync(password, user.password)
  console.log(isvalid)
    if(!!isvalid){
        const {user_id,username,password,isloggedin} = user
        return  {user_id,username,password,isloggedin}
    }
    console.log(user_id)
})

   


// Launch Server
app.listen(8080, () => {
    console.log('Server is running...')
})