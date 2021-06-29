<template>
  <footer class="p-8 grid grid-cols-1 md:grid-cols-2">
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
