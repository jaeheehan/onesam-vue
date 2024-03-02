<template>
  <div class="row">
    <div class="col p-3">
      <router-link to="/todos/add" class="btn btn-primary">할일 추가</router-link>
      <button class="btn btn-primary ms-1" @click="fetchTodoList">새로고침</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem"/>
      </ul>
    </div>
  </div>
</template>
<script setup>
import TodoItem from "@/pages/TodoItem.vue";
import {inject} from "vue";

const todoList = inject('todoList')
const { fetchTodoList } = inject('actions')
</script>