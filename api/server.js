const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;

// TODO move this somewhere else
const amqp = require('amqplib');
const cors = require('cors');
const queue = 'create_message';

let channel 
const startup = async () => {
    let connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
}

startup().then( () => {
    app.use(cors());
    app.use(bodyParser.json());

    app.post('/submit', (req, res) => { 
        console.log('here')
        sendToQueue(req.body);

        res.send('Request submitted.');
    })

    app.listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
})


const sendToQueue = (request) => {
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(request)));
}