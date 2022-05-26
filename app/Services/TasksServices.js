import { ProxyState } from "../AppState.js"

class TasksServices {

    addItem(targetTask, userInput) {

        targetTask.tasks = [...targetTask.tasks, userInput]

        ProxyState.tasks = ProxyState.tasks
    }



}

export const tasksService = new TasksServices()