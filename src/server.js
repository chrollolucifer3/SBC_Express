const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World')
})

const API_V1 = require('./routes/v1/index')

app.use('/v1', API_V1)

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`)
})