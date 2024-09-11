import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: [],
    filter: 'all',
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === 'completed') {
        return state.tasks.filter((task) => task.completed);
      } else if (state.filter === 'pending') {
        return state.tasks.filter((task) => !task.completed);
      } else {
        return state.tasks;
      }
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTask(state, task) {
      task.completed = !task.completed;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    // Fetch tasks from JSONPlaceholder API
    async fetchTasks({ commit }) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        // Assuming we are fetching the first 10 tasks for simplicity
        commit('setTasks', data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },

    // Add a new task (simulated as JSONPlaceholder doesn't actually save it)
    async addTask({ commit }, taskName) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: taskName,
            completed: false,
            userId: 1,
          }),
        });
        const newTask = await response.json();
        commit('addTask', {
          ...newTask,
          name: newTask.title, // Mapping API 'title' to 'name'
        });
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },

    // Toggle task completion status (simulated)
    async toggleTask({ commit }, task) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            completed: !task.completed,
          }),
        });
        const updatedTask = await response.json();
        commit('toggleTask', updatedTask);
      } catch (error) {
        console.error('Error toggling task:', error);
      }
    },

    // Delete task (simulated as JSONPlaceholder doesn't actually delete it)
    async deleteTask({ commit }, taskId) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
          method: 'DELETE',
        });
        commit('deleteTask', taskId);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
  },
});

export default store;
