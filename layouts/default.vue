<template>
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
</template>