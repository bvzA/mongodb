import express from 'express'
import dbconn from './db/conection.js'
import userHandler from './handler/user.js'

const app = express()
app.use(express.json())

app.use('/user', userHandler)

dbconn()

// var usr = new User({name: 'Dan', sex: 'Male', birthday: '10-12-1997'})
// usr.save().then(() => {console.log('save!!')})

// User.find((err, results) => {
//     if(err) {
//         console.error(err)
//         return
//     }

//     console.log(results)
// })


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) )
