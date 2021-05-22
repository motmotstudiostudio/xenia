<template>
  <div
    v-editable="blok"
    class="prose my-24 mx-auto">
    <h1 class="font-serif hue">{{ blok.title }}</h1>
    <p>{{ blok.what }}</p>
    <p>{{ blok.where }}</p>
    <p>{{ blok.when }}</p>
    <p>{{ blok.link.url }}</p>
    <rich-text-renderer
      :document="blok.body"
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
