const express = require('express');
const path = require('path');

const router = express.Router()

// Products Routes
router.get('/', (req, res) => {
	console.log('inside get route');
	res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.get('/shop', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})


// Post Routes
router.get('/posts', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'post.html'));
})

router.post('/posts', (req, res) => {
	console.log(req.body.message)
	res.status(200).send({data: req.body})
})

module.exports = router
