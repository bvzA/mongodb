import express from 'express'
import dbconn from './db/conection.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>')
})

app.get('/api/movies', (req, res) => {
    res.send(movies)
})

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
