<script>
import {VueCsspin} from "vue-csspin/src";
import 'vue-csspin/dist/vue-csspin.css'

export default {
  name: "Loading",
  components: { VueCsspin }
}
</script>

<template>
  <VueCsspin message="Loading" spin-style="cp-flip"/>
</template>

<style scoped>

</style>