const app=require('./index')
const path=require('path')

let data1=app.myFileWriter(path.join(__dirname,"file.txt") ,"Hello")

let data2=data1.then(()=>{app.myFileReader(path.join(__dirname,"file.txt"))})

let data3=data2.then(()=>{app.myFileUpdater(path.join(__dirname,"file.txt")," World")})

let data4=data3.then(()=>{app.myFileDeleter(path.join(__dirname,"file.txt"))})