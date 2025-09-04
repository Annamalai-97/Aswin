const mongoose=require('mongoose')

const dbconnect=()=>{
    mongoose.connect('mongodb://localhost:27017/sampledb').then(()=>{
        console.log('db is connected')
    }).catch((error)=>{
        console.log(error)
        process.exit(1)
    })
}

module.exports=dbconnect;