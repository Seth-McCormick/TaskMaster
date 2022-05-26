import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(taskData) {
        this.id = taskData.id || generateId(),
            this.title = taskData.title,
            this.tasks = taskData.tasks

    }



    get Template() {
        return `
        <div class="col-md-3">
        <div class="card bg-dark text-light text-center ">
          <div class="bg-primary ">
            <h4>${this.title}</h4>
            <p>5/3</p>
          </div>
          ${this.listItemTemplate}
          <div>
            <form onsubmit="app.tasksController.addItem('${this.id}')">
              <input required id="task" name="task" type="text">
              <button  type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

`

    }

    get listItemTemplate() {
        let template = ''
        this.tasks.forEach(ta => {
            template += `
<div class="d-flex p-2 justify-content-between align-items-center">
            <input type="checkbox">
            <h5 class="m-0">${ta}</h5>
            <i  class="mdi mdi-delete-alert selectable"></i>
          </div>
`
        });

        return template
    }

}