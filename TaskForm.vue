<template>
  <div>
    <form @submit.prevent="addTask">
      <input v-model="newTask" type="text" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      error: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') {
        this.error = 'Task name cannot be empty';
        return;
      }
      this.$store.dispatch('addTask', this.newTask);
      this.newTask = '';
      this.error = '';
    }
  }
};
</script>
