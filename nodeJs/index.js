const geekTimes = require('./lib')
geekTimes.on('newLesson', (res) => {
    if (res.price < 80) {
        console.log('buy!', res)
    }
})
setTimeout (()=>{
    // 需要注意的是，EventEmitter如果添加了过多的监听器，Node.js觉得你有内存泄漏嫌疑，会抛出一个warning。
    // 用以下这句则可以消除这个限制
    geekTimes.setMaxListeners(200);
    for( let i=0;i<100;i++){
        geekTimes.on('newLesson',({price})=>{
        })
    }
},10000)