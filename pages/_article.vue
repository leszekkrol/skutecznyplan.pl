<template>
  <section class="tl pb0">
    <div class="container container--narrow" v-html="content" lang="md" id="blog"></div>
  </section>
</template>

<script>
  export default {
    layout: 'layout-blog',
    head() {
      return {
        meta: [
          { hid: 'title', name: "title", content: this.article.title + " | Skuteczny Plan" },
          { hid: "description", name: "description", content: this.article.description },
          { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
          { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
          { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
          { hid: "og:title", name: "og:title", content: this.article.title + " | Skuteczny Plan" },
          { hid: "og:description", name: "og:description", content: this.article.description },
          { hid: "description", name: "description", content: this.article.description },
          { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + this.$route.fullPath }
        ]
      };
    },
    async asyncData({ params, error, store }) {
      try {
        const slug = params.article
        let article = store.state.articles.find(i => i.slug === slug);
        const fileContent = await import("~/static/articles/" + article.filename)
        return {
          content: fileContent.default,
          article: article
        }
      }
      catch (err) {
        error({statusCode: 404, message: 'Page not found'})
      }
    },
  }
</script>
