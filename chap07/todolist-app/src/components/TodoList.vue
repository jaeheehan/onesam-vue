<script>
import TodoListItem from "@/components/TodoListItem.vue";
export default {
  name: "TodoList",
  components: { TodoListItem },
  props: {
    todoList : {type: Array, required : true}
  },
  emits: ["delete-todo", "toggle-completed"]
}
</script>

<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem v-for="todoItem in todoList" :key="todoItem.id"
          :todoItem="todoItem"
        />
      </ul>
    </div>
  </div>
</template>