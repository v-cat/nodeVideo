// console.log('1') require ('./lib.js') console.log('2')
var playerAction=process.argv[process.argv.length-1];
const  gameLib = require('./lib.js')
// console.log(lib,'exports')
// gameLib(playerAction)
let count =0
process.stdin.on('data',e=>{
    const playerAction=e.toString().trim()
    // console.log(playerAction)
    const result = gameLib(playerAction)
    console.log(result)
    if(result=='-1'){
        count++
        console.log(count)
    }
    if(count==3){
        console.log('你牛')
        process.exit()
    }
})