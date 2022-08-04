<template>
  <Header 
    tag="Błąd 404" 
    title="Strona nie została znaleziona" />
</template>

<script>
  export default {
    generate: { fallback: '404.html' },
    props: ['error'],
    layout: 'layout-error' // you can set a custom layout for the error page
  }
</script>