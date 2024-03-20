<template>
  <div class="list__action-create">
    <input class="list__action-create-input" type="text" v-model="text" />
    <button
      class="list__action-create-button"
      @click="submit"
      @keyup.enter="submit"
    >
      <div class="list__action-create-button-hover">
        <i class="list__action-create-button-icon fa-solid fa-plus"></i>
      </div>
    </button>
  </div>
</template>

<script setup>
import { useTodosStore } from "@/stores/storeTodos";
import { ref } from "vue";

const todosStore = useTodosStore();
const text = ref("");
const submit = () => {
  text.value = text.value.trim();
  if (text.value.length > 0) {
    todosStore.addItem(text.value);
    text.value = "";
  }
};
</script>

<style scoped src="./CreateComponent.css"></style>
