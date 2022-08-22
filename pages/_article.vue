<template>
  <div>
    <Header
      tag="podcast"
      :title="this.article.title"
      :description="this.article.description"
      :url="this.article.url"
     />
    <article class="mx-auto max-w-3xl pt-10 px-4 pb-12 sm:py-24">
      <div class="md:mx-auto lg:col-span-6 text-left text-gray-400 sm:text-lg" v-html="content" lang="md" id="blog"></div>
      <div class="p-10">
        <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img src="~/assets/img/avatar.jpg" alt="Leszek W. Król" class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start">
          <div class="flex flex-col text-gray-600">
            <h4 class="text-lg font-semibold">Leszek W. Król</h4>
            <p>Na co dzień towarzyszę firmom i instytucjom w projektowaniu strategii oraz opracowywaniu nowych produktów i usług.</p>
          </div>
        </div>
      </div>
    </article>
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
