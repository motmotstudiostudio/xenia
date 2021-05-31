<template>
  <div>
    <a
      v-if="articleContent.link.linktype == 'url'"
      :href="articleContent.link.url"
      target="_blank"
      class="grid grid-cols-1 md:grid-cols-8 hue"
      :data-img="articleContent.image">
      <div class="col-span-1 md:col-span-4">
        {{ articleContent.title }}
      </div>
      <div class="col-span-1">
        {{ articleContent.what }}
      </div>
      <div class="col-span-1 md:col-span-2">
        {{ articleContent.where }}
      </div>
      <div class="col-span-1">
        {{ articleContent.when }}
      </div>
    </a>
    <nuxt-link
      v-if="articleContent.link.linktype == 'story'"
      :to="articleSlug"
      class="grid grid-cols-1 md:grid-cols-8 hue"
      :data-img="articleContent.image.filename">
      <div class="col-span-1 md:col-span-4">
        {{ articleContent.title }}
      </div>
      <div class="col-span-1">
        {{ articleContent.what }}
      </div>
      <div class="col-span-1 md:col-span-2">
        {{ articleContent.where }}
      </div>
      <div class="col-span-1">
        {{ articleContent.when }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    }
  },
}
</script>

<style>

</style>
