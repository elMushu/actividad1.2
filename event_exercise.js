// Exercise
// WRITE THE FOLLOWING LOGGER EXAMPLE FROM EVENT IN A FILE
// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data));
// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');

const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg })
    }
}

const logger = new Logger()

let arrInfo = []
logger.on('message', function (data) {
    console.log('Called Listener', data)
    arrInfo.push(data)
});

logger.log('Hello World')
logger.log('Hi')
logger.log('Hello')

const jsonData = JSON.stringify(arrInfo)
fs.writeFile('./data/logs.json', jsonData, 'utf8', function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("File Saved!");
})