const express = require('express');
const router = express.Router();
const pgp =require('pg-promise')()
const connectionString="postgres://localhost:5432/nutrifyme"
const db = pgp(connectionString)


// User Diary Entry
router.post('/entry', (req,res) => {
    const meal = req.body.meal
    const description = req.body.description
    const user_id = req.body.user_id

    db.none('INSERT INTO diaryentrys(meal,description,user_id) VALUES($1,$2,$3)',[meal,description,user_id])
    res.send('Entry Added')
})

// Get all of a users diary entry
router.get('/entry/:user_id', (req,res) =>{
    const user_id = req.params.user_id

      db.any( 'SELECT * FROM diaryentrys WHERE user_id = $1', [user_id])
    
    .then((diaryentrys)=>{
    res.json({success:true, diaryentrys})
    }).catch(error=> console.log(error)) 
    
    
})
//Delete a diary Entry
router.delete('/entry/:diaryentry_id', (req, res) => {
  const diaryentry_id = req.params.diaryentry_id
  db.none("DELETE FROM diaryentrys WHERE diaryentry_id = $1", [diaryentry_id])
  .then(() =>{
    res.json({success:true},'Entry was deleted')
  })
})


// Update a Diary Entry
// router.patch('/entry/:diaryentry_id', (req, res) => {
//   const meal = req.body.meal
//   const description = req.body.description
//   const diaryentry_id = req.params.diaryentry_id
//   db.none('UPDATE diaryentrys SET meal =$1, description =$2 WHERE diaryentry_id=$3',
//   [meal,
//   description,
//   diaryentry_id
//   ]).then(() => {
//       res.send('Entry was updated')
// //   }).catch(error => console.log(error))

// })

module.exports = router