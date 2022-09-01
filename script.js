const tasks = [
    {text: 'Ir a la U', done: true},
    {text: 'Tarea web', done: false}
]  

const doneTasks = tasks.filter((task)=> task.done) //task.done ya se sobreentiende como done = true
const pendingTasks = tasks.filter((task)=> !task.done)

tasks.forEach((task) => {
const element = document.createElement('li')
element.className = task.done ? 'checked' : 'unchecked'
})

createTasks();