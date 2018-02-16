const express = require('express')
const path = require('path')
const compression = require('compression')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000

app.use(compression())
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${String(PORT)} in (development).`)
})
