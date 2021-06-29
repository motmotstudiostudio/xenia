<template>
  <footer class="md:p-8 p-4 grid grid-cols-1 md:grid-cols-2">
    <div class="fixed right bottom mobile-show">
      <a href="#top" class="text-4xl">&#8593;</a>
    </div>
    <div>
      <p>{{currentDate.getFullYear()}} © Xenia Benivolski</p>
    </div>
    <div class="md:text-right">
      <p>site made with &#9825;
        by <a href="https://mouthoftiger.com" target="_blank">mouthoftiger</a></p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date
    }
  }
}
</script>
