const Express =require('express');
const app = Express();
const tasks = require('./routes/tasks')
const connectDB = require('./controllers/connection')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


//express middlewre
app.use(Express.static('./public'));
app.use(Express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandler)

//Routes
app.get('/hello',(req,res)=>res.send('Task manager app'));


const port =process.env.port || 3000;
const start = async ()=>{
    try {
        const connection = await connectDB(process.env.MONGO_URI);
 
        return  app.listen(port, ()=>{
            console.log(`Sever started on ${port} ...`)
        })
  
    } catch (error) {
        console.log(error)
        
    }
}

start()

