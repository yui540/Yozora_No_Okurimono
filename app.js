const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

app.use(basicAuth('cowardly-witch', 'strawberry-ice'))
app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 8080, () => {
  console.log('Server Running...')
})
