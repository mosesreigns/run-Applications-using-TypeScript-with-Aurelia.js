interface Todo {
  title: string;
  description: string
  completed: boolean;
}

class App {
  heading = "Todos List APP";
  todos: Todo[] = [];
  todoTitle = '';
  todoDescription = '';

  addTodo() {
    if (this.todoTitle || this.todoDescription) {
      this.todos.push({
        title: this.todoTitle,
        description: this.todoDescription,
        completed: false
      });
      this.todoTitle = '';
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  cloneTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.push(todo);
    }
  }
}

export { App }