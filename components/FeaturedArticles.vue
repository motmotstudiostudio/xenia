<template>
  <div v-editable="blok">
    <nav class="tablehead hidden md:grid grid-cols-1 md:grid-cols-8 pb-2">
      <div class="col-span-1 md:col-span-4" @click="sort('title')" v-bind:class="[sortBy === 'title' ? sortDirection : '']">
       Title
      </div>
      <div class="col-span-1">
       What
      </div>
      <div class="col-span-1 md:col-span-2">
       Where
      </div>
      <div class="col-span-1" @click="sort('when')" v-bind:class="[sortBy === 'when' ? sortDirection : '']">
       When
      </div>
    </nav>

      <ul class="worklist">
       <li class="py-4" v-for="post in sortedArticles" :key="post.id" data-fx="xenia">
         <a
           v-if="post.link.linktype == 'url'"
           :href="post.link.url"
           target="_blank"
           class="grid grid-cols-1 md:grid-cols-8 hue"
           :data-img="post.image.filename">
           <div class="col-span-1 md:col-span-4">
             {{ post.title }}
           </div>
           <div class="col-span-1">
             {{ post.what }}
           </div>
           <div class="col-span-1 md:col-span-2">
             {{ post.where }}
           </div>
           <div class="col-span-1">
             {{ post.when }}
           </div>
         </a>
         <nuxt-link
           v-if="post.link.linktype == 'story'"
           :to="`articles/` + post.slug"
           class="grid grid-cols-1 md:grid-cols-8 hue"
           :data-img="post.image.filename">
           <div class="col-span-1 md:col-span-4">
             {{ post.title }}
           </div>
           <div class="col-span-1">
             {{ post.what }}
           </div>
           <div class="col-span-1 md:col-span-2">
             {{ post.where }}
           </div>
           <div class="col-span-1">
             {{ post.when }}
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
  data() {
    return {
      sortBy: 'when',
      sortDirection: 'desc',
    }
  },
  methods: {
    sort: function(s){
      if(s === this.sortBy) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      }
      this.sortBy = s;
    }


  },
  mounted () {
    this.$hoverMe();
  },
  computed: {
    sortedArticles() {
      // Load reference data/content from store
      const featuredArticles = this.$store.state.articles.articles.filter((article) => {
        return this.blok.articles.includes(article.uuid)
      })

      // Enable the ordering of the article previews
      // featuredArticles.sort((a, b) => {
      //   return this.blok.articles.indexOf(a.uuid) - this.blok.articles.indexOf(b.uuid);
      // })

      let posts = featuredArticles.map((post) => {
        return{
          id: post._uid,
          link: post.content.link,
          slug: post.slug,
          image: post.content.image,
          title: post.content.title,
          what: post.content.what,
          where: post.content.where,
          when: post.content.when
        }
      })

      posts.sort((p1,p2) => {
          let modifier = 1;
          if(this.sortDirection === 'desc') modifier = -1;
          if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
          return 0;
      });

      return posts
    }
  },

}
</script>
