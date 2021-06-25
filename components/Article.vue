<template>
  <div
    v-editable="blok"
    class="p-8">
    <div class="main-content">
      <h1 class="mb-6">{{ blok.title }}</h1>
      <rich-text-renderer
        :document="blok.body"
      />
    </div>
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
