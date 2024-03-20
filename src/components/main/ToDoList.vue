<template>
  <section class="list">
    <h1 class="list__header">To-Do List</h1>
    <div class="list__action">
      <create-component></create-component>
      <select-component></select-component>
    </div>
    <div class="list__container">
      <list-component></list-component>
    </div>
  </section>
</template>

<script setup>
import CreateComponent from "../create/CreateComponent.vue";
import ListComponent from "../list/ListComponent.vue";
import SelectComponent from "../select/SelectComponent.vue";
</script>

<style scoped src="./ToDoList.css"></style>
