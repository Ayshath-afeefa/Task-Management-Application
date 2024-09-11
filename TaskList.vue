<template>
  <div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="toggleTask(task)" />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    filteredTasks() {
      return this.$store.getters.filteredTasks;
    }
  },
  methods: {
    toggleTask(task) {
      this.$store.dispatch('toggleTask', task);
    },
    deleteTask(taskId) {
      console.log('Deleting Task ID:', taskId);
      this.$store.dispatch('deleteTask', taskId);
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
