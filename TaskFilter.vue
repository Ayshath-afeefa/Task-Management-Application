<template>
  <div>
    <button @click="setFilter('all')">All</button>
    <button @click="setFilter('completed')">Completed</button>
    <button @click="setFilter('pending')">Pending</button>
  </div>
</template>

<script>

export default {
  methods: {
    setFilter(filter) {
      this.$store.commit('setFilter', filter);
    }
  }
};
</script>
