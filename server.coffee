express = require 'express'
path = require 'path'
port = process.env.PORT or 8000
app = express()

app.use '/', express.static __dirname + '/'

app.get '/', (req, res) ->
  res.sendFile path.join __dirname + '/dist/index.html'
  return

app.get '*', (req, res) ->
  res.sendFile path.join __dirname + '/dist/index.html'
  return

app.listen port
console.log 'Server listen on port: ' + port
