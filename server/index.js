const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors')
app.use(express.json())
app.use(cors())

mongoose.connect(
    'mongodb+srv://chy71068:q749685123@atlascluster.x3d8bwj.mongodb.net/sert'
)

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
            }
        })
    })
    

app.post('/createUser', async (req,res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.get('/',(req, res) => {
    res.send('<h1>서비스 준비중입니다...</h1>')
})

app.get('hello', (req, res) => {
    res.send({ message: 'Hello world!'})
})

app.listen(3001, () => {
    console.log('SERVER RUNS PERFECTLY!')
})