<template>
  <div>
    <Header
      tag="podcast"
      :title="this.article.title"
      :description="this.article.description"
      :url="this.article.url"
     />
    <section class="mx-auto max-w-5xl pt-10 px-4 pb-12 sm:py-24">
      <div class="sm:text-center md:mx-auto lg:col-span-6 lg:text-left text-gray-400 sm:text-lg" v-html="content" lang="md" id="blog"></div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'layout-blog',
    head() {
      return {
        meta: [
          { hid: 'title', name: "title", content: this.article.title + " | Skuteczny Plan" },
          { hid: "description", name: "description", content: this.article.description },
          { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/img/skuteczny-plan-twitter-" + this.article.id + ".png" },
          { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
          { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/img/skuteczny-plan-og-" + this.article.id + ".png" },
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
