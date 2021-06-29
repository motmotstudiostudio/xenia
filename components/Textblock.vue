<template>
  <div
    v-editable="blok">
    <rich-text-renderer
      :document="blok.textblock"
    />
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
