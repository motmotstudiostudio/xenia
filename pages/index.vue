<template>
  <main class="mb-8">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component" />
  </main>
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      storyblokInstance.on('input', (event) => {
        console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      storyblokInstance.on(['published', 'change'], (event) => {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
  async fetch(context) {
    if(context.store.state.articles.loaded !== '1') {
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'articles/', version: 'published' })
      context.store.commit('articles/setArticles', articlesRefRes.data.stories)
      context.store.commit('articles/setLoaded', '1')
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'published'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
