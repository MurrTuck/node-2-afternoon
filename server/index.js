let express = require('express')
let app = express()
let ctrl = require('./controllers/messages_controller')
let SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)


app.listen(SERVER_PORT, () => console.log(`Server is Yee Yee on port ${SERVER_PORT}`))
