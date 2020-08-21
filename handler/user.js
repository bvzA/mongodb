import express from 'express'
import User from '../db/user.js'

const router = express.Router()

router.post('/register', (req, res) => {
    User.findOne({email: {'$eq': req.body.email}}, (err, result) => {
        if(err) {
            console.error(err)
            res.status(500).send(err)
        } else if(!result) {
            console.log('regist!!')
            let usr = new User({
                email: req.body.email,
                name: req.body.name,
                sax: req.body.sax,
                birthday: req.body.birthday,
            })
            console.log(usr)
            usr.save().then((doc) => {
                console.log('save!!')
                res.status(201).json(doc)
            })
        } else {
            result.execPopulate().then(
                (doc) => {
                    console.log('already save!!')
                    res.status(200).json(doc)
                }
            )
        }
    })
})

router.post('/login', (req, res) => {

})

export default router
