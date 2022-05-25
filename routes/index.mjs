import express from 'express'
const router = express.Router()

const messages = [
    {
        name: 'Rick',
        message: 'hello world',
        date: new Date()
    },
    {
        name: 'Donovan',
        message: 'bye world',
        date: new Date()
    }
]

router.get('/', function (req, res, next) {
        res.render('index', {messages: messages})
    })

router.get('/createMessage', function (req, res, next) {
        res.render('form')
    })


router.post('/', function (req, res, next) {
        const { name, message } = req.body
        messages.push({ name: name, message: message, date: new Date()})
        res.redirect('/')
    })


export default router