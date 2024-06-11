### SD555-Workshop-02

Create a Todo List Angular application, using the [DummyJSON API](https://dummyjson.com/docs/todos) as follows:

- Create a `todo` service containing a signal of todos (as a global state) and the following HTTP calls:
  - GET `https://dummyjson.com/todos?limit=3&skip=10`
  - GET `https://dummyjson.com/todos/1`
  - POST `https://dummyjson.com/todos/add`
  - PUT `https://dummyjson.com/todos/1`
  - DELETE `https://dummyjson.com/todos/1`
- Create the following components: `list-todos`, `update-todo`, `add-todo`. All components share access to the global state from the `todo` service.
- Display all todos, each todo has a button to be deleted, and displayed as a link to be updated. Implement the logic to display, update, and delete the todos.
- Implement the logic to add a new todo
- Create a filter within `list-todos` component to only display completed vs. incomplete todos.
