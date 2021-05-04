const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
var bcrypt = require('bcryptjs');
const connectionString = "postgres://localhost:5432/nutrifyme"
const db = pgp(connectionString)



// Registration and Encryption 
router.post('/register', (req, res) => {
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

// Login Verification
router.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await db.one(`SELECT * FROM users WHERE username = $1`, [username])
        
    console.log("user data", user)
    const isvalid = await bcrypt.compareSync(password, user.password)
    console.log("is valid", isvalid)

    if(!!isvalid){
        
        const {user_id,username,password,isloggedin} = user
        console.log("user id", user_id)
        console.log("username",username)
        res.json({success:true, user_id:user_id})
        //return  {user_id,username,password,isloggedin}
        
    } else (
        res.json({success:false})
    )
    
})

// User Diary Entry
router.post('/entry', (req,res) => {
    const meal = req.body.meal
    const description = req.body.description
    const user_id = 4

    db.none('INSERT INTO diaryentrys(meal,description,user_id) VALUES($1,$2,$3)',[meal,description,4])
    res.send('Entry Added')
})

// Get all of a users diary entry
router.get('/profile/:user_id', (req,res) =>{
    const user_id = req.params.user_id

    const diary = db.one( `SELECT * FROM diaryentrys WHERE user_id = $1`, [user_id])
    .then(()=>{
        res.json({success:true})
    }).catch(error=> console.log(error))
    
})


module.exports = router