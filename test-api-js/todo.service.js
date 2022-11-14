class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo)
    }

    delete_todo(id){
        // Your code here
        this.todos.todo.splice(id, 1)
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo[id] = todo
    }
}


module.exports= todoservice;