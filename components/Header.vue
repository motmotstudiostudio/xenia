<template>
  <header class="grid grid-cols-1 md:grid-cols-4 p-8">
    <div class="">
      <h1 class="">
        <nuxt-link to="/">
          Xenia Benivolski
        </nuxt-link></h1>
    </div>
    <div class="md:text-center">
      <li class="inline-block"><a href="mailto:xeniaster@gmail.com">xeniaster@gmail.com</a></li>
    </div>
    <div class="md:text-center">
      <nav class="main-navigation">
        <ul>
          <li class="inline-block"><a href="">bio</a></li>
          <li class="inline-block"><a href="">cv</a></li>
        </ul>
      </nav>
    </div>
    <nav class="switcher fixed">
      <ul>
        ( <li v-for="color of colors"
            :key="color"
            @click="$colorMode.preference = color"
            :class="getClasses(color)">
        {{ color }}
      </li> )
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        colors: ['light', 'dark']
      }
    },
    methods: {
      getClasses (color) {
        if (this.$colorMode.unknown) {
          return {}
        }
        return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
        }
      }
    }
  }
</script>
