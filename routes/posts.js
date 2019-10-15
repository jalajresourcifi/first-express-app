const express = require('express');
const path = require('path');

const router = express.Router()

router.get('/', (req, res) => {
	res.send('I am in get route')
})

router.get('/posts', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'post.html'))
})

router.post('/posts', (req, res) => {
	console.log(req.body.message)
	res.status(200).send({data: req.body})
})

module.exports = router
