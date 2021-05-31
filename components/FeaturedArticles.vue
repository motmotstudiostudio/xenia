<template>
  <div v-editable="blok">
    <nav class="tablehead hidden md:grid grid-cols-1 md:grid-cols-8 pb-2">
      <div class="col-span-1 md:col-span-4">
       Title
      </div>
      <div class="col-span-1">
       What
      </div>
      <div class="col-span-1 md:col-span-2">
       Where
      </div>
      <div class="col-span-1">
       When
      </div>
    </nav>

      <ul class="worklist">
       <li class="py-4" v-for="article in sortedArticles" :key="article._uid">
        <article-teaser
          v-if="article.content"
          :article-slug="article.full_slug"
          :article-content="article.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
      </ul>

  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedArticles() {
      // Load reference data/content from store
      const featuredArticles = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })

      // Enable the ordering of the article previews
      featuredArticles.sort((a, b) => {
        return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid);
      })

      return featuredArticles
    }
  }
}
</script>
