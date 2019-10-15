const EventEmitter = require('events').EventEmitter;

class GeekTimes extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newLesson', { price: Math.random() * 100 });
        }, 3000)
    }
}
module.exports = new GeekTimes