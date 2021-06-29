<template>
  <ul
    v-editable="blok"
    class="flex-none md:flex py-8 mb-6">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="md:flex-auto md:pr-6">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
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
