const { error } = require('console')
const fs=require('fs')
const os=require('os')
Sync 
fs.writeFileSync("./ateef.js","hey there how are you hope you are doing good")

Async
fs.writeFile("./ateef.js","hey there how are ASYNC hope you are doing good",(error)=>error)


async way to read file
fs.readFile("./ateef.js","utf-8",(error,result)=>{
    if(error){
        console.log( error)
    }else{
        console.log(result)
    }
})

sync way to read file
const res=fs.readFileSync("./ateef.js","utf-8")
console.log(res)


sync wat to add or join for analytical purpose
fs.appendFileSync('./ateef.js',`${Date.now()}`)

sync way to copy and there are three arug
fs.cpSync('./ateef.js','./sohail.js')

deleting the file
fs.unlinkSync('./sohail.js')

status 
console.log(fs.statSync('./ateef.js'))

making directory
fs.mkdirSync('ateef')

fs.mkdirSync('syed/ateef/quadri',{recursive:true})
console.log(os.cpus().length)