const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = Task