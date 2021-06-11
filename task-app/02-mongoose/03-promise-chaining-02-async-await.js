require('___/src/db/mongoose')
const User = require('___/src/models/user')

// User.findByIdAndUpdate('5c1a5a34d5a2ec046ca8f6bc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findUserAndCount = async (id) => {
    const user = await User.findByIdAndUpdate(id, { age: 1 })
    const count = await User.countDocuments({ age: 1 })
    return count
}
findUserAndCount('5c1a634150c97706427d4661').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
// =============================================================
// =============================================================
// =============================================================
// Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}
deleteTaskAndCount('5c1a634150c97706427d4661').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})