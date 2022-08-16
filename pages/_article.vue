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
          {
            hid: "title",
            name: "title",
            content: this.article.title + " | Skuteczny Plan",
          },
          {
            hid: "description",
            name: "description",
            content: this.article.description,
          },
          {
            hid: 'article:published_time',
            property: 'article:published_time',
            content: this.article.publish_date,
          },
          {
            hid: 'article:author',
            property: 'article:author',
            content: 'Leszek W. Król',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'Skuteczny Plan',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.article.title + " | Skuteczny Plan",
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.article.description,
          },
          {
            hid: 'og:publish_date',
            property: 'og:publish_date',
            content: this.article.publish_date,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://www.skutecznyplan.pl' + this.$route.fullPath,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og-' + this.article.id + '.png',
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og-' + this.article.id + '.png',
          },
          {
            hid: 'og:image:type',
            property: 'og:image:type',
            content: 'image/png',
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.article.title + " | " + this.article.description,
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: 'https://www.skutecznyplan.pl' + this.$route.fullPath,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-twitter-' + this.article.id + '.png',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.article.title + " | Skuteczny Plan",
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.article.description,
          },
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
