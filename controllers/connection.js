const mongoose = require('mongoose')




const connectDB = async (url)=>{
return await mongoose.connect(url, {
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Conection successful'))
    .catch((err)=>console.log(err))
    
}
module.exports = connectDB;