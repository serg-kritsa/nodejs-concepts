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
    getTasksToDoUsingLonghand() {
        return this.tasks.filter((theTask) => {
            return theTask.completed === false
        })
    },
    getTasksToDoUsingOneLineReturnShorthand() {
        return this.tasks.filter(theTask => theTask.completed === false)
    }
}

console.log(tasks.getTasksToDoUsingOneLineReturnShorthand())