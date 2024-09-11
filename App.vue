<template>
  <div id="app">
    <h1>Task Management Application</h1>
    <TaskForm />
    <TaskFilter />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from '/TaskForm.vue';
import TaskList from '/TaskList.vue';
import TaskFilter from '/TaskFilter.vue';

export default {
  name: 'App',
  components: {
    TaskForm,
    TaskList,
    TaskFilter
  }
};
</script>

<style src="./style.css"></style>
