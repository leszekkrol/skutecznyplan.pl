<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <main id="app" class="bg-gray-900 v-lines agus">
        <Navigation />
        <Header 
          tag="podcast" 
          :title="$t('section.header.title')" 
          :description="$t('section.header.description')"
          url="https://anchor.fm/skuteczny-plan-podcast" />
        <slot />
        <Footer />
      </main>
    </Body>
  </Html>
</template>

<script setup>
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t('meta.title'))

useHead({
  meta: [
    { charset: "utf-8" },
    { 'http-equiv': 'Content-type', content: 'text/html;charset=UTF-8' },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Leszek W. Król" },
    {
      hid: "title",
      name: "title",
      content: t('meta.title'),
    },
    {
      hid: "description",
      name: "description",
      content: t('meta.description'),
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: t('meta.site_name'),
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'pl_PL',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: t('meta.title'),
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: t('meta.description'),
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.skutecznyplan.pl',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og.png',
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-og.png',
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: t('meta.image_alt'),
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://www.skutecznyplan.pl',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'http://www.skutecznyplan.pl/img/skuteczny-plan-twitter.png',
    },
    {
      hid: 'twitter:domain',
      name: 'twitter:domain',
      content: 'skutecznyplan.pl',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: t('meta.title'),
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: t('meta.description'),
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@leszekkrol',
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@leszekkrol',
    },
  ],
})
</script>