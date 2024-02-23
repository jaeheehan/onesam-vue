<script>
export default {
  name: "SongListItem",
  inject : ["icons"],
  props: ["song"]
}
</script>

<template>
  <li>
    <i :class="song.done ? icons.checked : icons.unchecked"></i>
    {{song.title}}
  </li>
</template>

<style scoped>

</style>