//
// Getting incompleted tasks using filter
//

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter(theTask => theTask.completed === false)
    }
}

console.log(tasks.getTasksToDo())