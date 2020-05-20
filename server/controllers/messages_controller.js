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
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        let messageId = req.params.id

        let index = messages.findIndex((element) => element.id == messageId)

        if (index === -1) {
            return res.status(404).send('Message not found')
        }

        messages.splice(index, 1)

        res.status(200).send(messages)
    }
}