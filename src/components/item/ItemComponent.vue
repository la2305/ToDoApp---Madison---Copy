<template>
  <div
    class="list__container-item"
    :class="{ 'list__container-item-out': isRemoveActive[item.id] }"
    v-for="item in todosStore.filterTodos"
    :key="item.id"
  >
    <div
      class="list__container-item-text"
      :class="{ 'list__container-item-text-completed': item.completed }"
    >
      {{ item.text }}
    </div>
    <button
      class="list__container-item-check"
      @click="todosStore.toggleCompleteItem(item.id)"
    >
      <i class="list__container-item-check-icon fa-solid fa-check"></i>
    </button>
    <button
      class="list__container-item-trash"
      @click="todosStore.removeItem(item.id), removeItem(item.id)"
    >
      <i class="list__container-item-trash-icon fa-solid fa-trash"></i>
    </button>
  </div>
</template>

<script setup>
import { useTodosStore } from "@/stores/storeTodos";
import { ref } from "vue";

const todosStore = useTodosStore();
const isRemoveActive = ref([]);

todosStore.loadTodosFromLocalStorage();
const removeItem = (itemId) => {
  isRemoveActive.value[itemId] = true;
};
</script>

<style scoped src="./ItemComponent.css"></style>
