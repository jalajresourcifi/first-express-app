const express = require('express');
const bodyParser = require('body-parser');

const postRoute = require('./routes/posts')

const app = express()

app.use(function (req, res, next) {
  console.log(2+2);
  console.log('postRoute')
  console.log(postRoute)
	next();
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(postRoute);


app.listen(3000, () => {
	console.log('Server started on port 3000')
})
