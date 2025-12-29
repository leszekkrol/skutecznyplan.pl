<template>
  <Html :lang="htmlLang" :dir="htmlDir">
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
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t('meta.title'))
const htmlLang = computed(() => head.value?.htmlAttrs?.lang || locale.value || 'pl')
const htmlDir = computed(() => head.value?.htmlAttrs?.dir || 'ltr')

const siteUrl = 'https://www.skutecznyplan.pl'
const defaultOgImage = `${siteUrl}/img/skuteczny-plan-og.png`
const defaultTwitterImage = `${siteUrl}/img/skuteczny-plan-twitter.png`

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: defaultOgImage,
  ogImageSecureUrl: defaultOgImage,
  ogImageAlt: () => t('meta.image_alt'),
  ogSiteName: () => t('meta.site_name'),
  ogLocale: 'pl_PL',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.title'),
  twitterDescription: () => t('meta.description'),
  twitterImage: defaultTwitterImage,
  twitterSite: '@leszekkrol',
  twitterCreator: '@leszekkrol',
})

useHead({
  htmlAttrs: computed(() => ({
    lang: head.value?.htmlAttrs?.lang || 'pl',
    dir: head.value?.htmlAttrs?.dir || 'ltr'
  })),
  meta: [
    { name: "author", content: "Leszek W. Król" },
  ],
})
</script>