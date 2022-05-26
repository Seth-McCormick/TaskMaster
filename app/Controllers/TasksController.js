import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksServices.js";

function _drawTask() {
    let tasks = ProxyState.tasks
    let template = ''
    tasks.forEach(t => template += t.Template)

    // console.log('hello', tasks);
    document.getElementById('task-template').innerHTML = template
    ProxyState.on('tasks', _drawTask)


}





export class TasksController {
    constructor() {
        _drawTask()

    }
    addItem(id) {
        window.event.preventDefault()
        let userInput = window.event.target.task.value
        let targetTask = ProxyState.tasks.find(t => t.id == id)
        console.log(window.event);

        tasksService.addItem(targetTask, userInput)

        // console.log(targetTask);
        // console.log(window.event.target.task.value);

    }

    deleteItem() {



    }

}