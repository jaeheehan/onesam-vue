<script>
export default {
  name: "InputName",
  props: ["name"]
}
</script>

<template>
  <input type="text" :value="name" @input="$emit('update:name', $event.target.value)"/>
</template>

<style scoped>

</style>