<template>
  <div v-editable="blok">
    <div v-html="blok.htmlblock.html"></div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
