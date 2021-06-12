require('./db/mongoose')
const Task = require('./models/task')
const User = require('./models/user')

const populateExistingRef = async () => {
    const task = await Task.findById('5c2e505a3253e18a43e612e6')
    await task.populate('owner').execPopulate()
    console.log(task.owner)
}

const populateVirtualRef = async () => {
    const user = await User.findById('5c2e4dcb5eac678a23725b5b')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

// populateExistingRef()

populateVirtualRef()