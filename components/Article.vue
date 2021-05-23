<template>
  <div
    v-editable="blok"
    class="p-8 text-gray-800">
    <h1 class="font-serif hue text-4xl">{{ blok.title }}</h1>
    <div class="text-2xl">
      <p>{{ blok.what }}</p>
      <p>{{ blok.where }}</p>
      <p>{{ blok.when }}</p>
      <p>{{ blok.link.url }}</p>
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
