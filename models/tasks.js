const mongoose = require('mongoose')
const Schema = mongoose.Schema


const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide a value'],
        trim: true,
        maxlength: [20, 'cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('tasks',taskSchema)