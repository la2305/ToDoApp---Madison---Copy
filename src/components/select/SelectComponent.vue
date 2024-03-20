<template>
  <div class="list__action-select">
    <select
      name="format"
      class="list__action-select-item"
      v-model="filter"
      @change="todosStore.setFilter(filter)"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "@/stores/storeTodos";

const todosStore = useTodosStore();
const filter = ref("all");
</script>

<style scoped src="./SelectComponent.css"></style>
