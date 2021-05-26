<template>
  <div
    v-editable="blok"
    class="p-8 text-gray-800">
    <h1 class="">{{ blok.title }}</h1>
    <div class="">
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
