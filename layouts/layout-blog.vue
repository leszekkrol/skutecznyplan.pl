<template>
  <main id="app" class="bg-gray-900">
    <Navigation />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
  export default {
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
