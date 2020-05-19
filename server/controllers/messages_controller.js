let messages = []
let id = 0

module.exports = {

    create: (req, res) => {
        let { text, time } = req.body
        let newMessage = { id, text, time }

        messages.push(newMessage)

        id++

        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let { text } = req.body
        let { message_id } = req.params

        let index = messages.findIndex((element) => element.id === +message_id)

        if (index === -1) {
            return res.status(404).send('Message not found')
        }

        let updatedMessage = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        messages[index] = updatedMessage

        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let { message_id } = req.params

        let index = messages.findIndex((element) => element.id === +message_id)

        if (index === -1) {
            return res.status(404).send('Message not found')
        }

        messages.splice(index, 1)

        res.status(200).send(messages)
    }
}