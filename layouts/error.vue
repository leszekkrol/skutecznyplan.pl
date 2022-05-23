<template>
  <section class="tl">
    <div class="container container--narrow"> 
      <h2 v-if="error.statusCode === 404" class="fs48 heading lhheading mb3 color--black">Strona nie została znaleziona</h2>

      <NuxtLink to="/">Strona główna</NuxtLink>
    </div>
  </section>
</template>

<script>
  export default {
    generate: { fallback: '404.html' },
    props: ['error'],
    layout: 'layout-error' // you can set a custom layout for the error page
  }
</script>