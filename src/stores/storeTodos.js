import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
    filter: "all",
  }),

  // method
  actions: {
    // Get data from local storage and save in todos
    loadTodosFromLocalStorage() {
      const result = JSON.parse(localStorage.getItem("todos"));
      if (result) {
        this.todos = result;
      }
    },

    // Save data to local storage
    saveTodosToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    // Remove item
    removeItem(itemId) {
      setTimeout(() => {
        const index = this.todos.findIndex((item) => item.id === itemId);
        if (index > -1) {
          this.todos.splice(index, 1);
        }
        this.saveTodosToLocalStorage();
      }, 500);
    },

    // Toggle complete
    toggleCompleteItem(itemId) {
      this.todos.forEach((item) => {
        if (item.id === itemId) {
          item.completed = !item.completed;
        }
      });
      this.saveTodosToLocalStorage();
    },

    // Add item
    addItem(text) {
      const todo = {
        text: text,
        completed: false,
        id: Math.random(),
      };
      this.todos.push(todo);
      this.saveTodosToLocalStorage();
    },

    // Set filter
    setFilter(select) {
      this.filter = select;
    },
  },

  // computed
  getters: {
    // Get todos by filter set
    filterTodos(state) {
      if (state.filter === "completed") {
        return this.todos.filter((item) => item.completed == true);
      } else if (state.filter === "uncompleted") {
        return this.todos.filter((item) => item.completed == false);
      } else {
        return this.todos;
      }
    },
  },
});
