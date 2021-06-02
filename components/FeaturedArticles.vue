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
       <li class="py-4" v-for="article in sortedArticles" :key="article._uid" data-fx="xenia">
         <a
           v-if="article.content.link.linktype == 'url'"
           :href="article.content.link.url"
           target="_blank"
           class="grid grid-cols-1 md:grid-cols-8 hue"
           :data-img="article.content.image.filename">
           <div class="col-span-1 md:col-span-4">
             {{ article.content.title }}
           </div>
           <div class="col-span-1">
             {{ article.content.what }}
           </div>
           <div class="col-span-1 md:col-span-2">
             {{ article.content.where }}
           </div>
           <div class="col-span-1">
             {{ article.content.when }}
           </div>
         </a>
         <nuxt-link
           v-if="article.content.link.linktype == 'story'"
           :to="`articles/` + article.slug"
           class="grid grid-cols-1 md:grid-cols-8 hue"
           :data-img="article.content.image.filename">
           <div class="col-span-1 md:col-span-4">
             {{ article.content.title }}
           </div>
           <div class="col-span-1">
             {{ article.content.what }}
           </div>
           <div class="col-span-1 md:col-span-2">
             {{ article.content.where }}
           </div>
           <div class="col-span-1">
             {{ article.content.when }}
           </div>
         </nuxt-link>
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
