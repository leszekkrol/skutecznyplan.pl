<template>
  <div>
    <Header 
      tag="Błąd 404" 
      title="Strona nie została znaleziona" />
    <section class="mx-auto max-w-5xl pt-10 px-4 py-24">
      <div class="flex flex-wrap gap-x-8">
        <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <NuxtLink to="/" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Strona główna</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    generate: { fallback: '404.html' },
    props: ['error'],
    layout: 'layout-error' // you can set a custom layout for the error page
  }
</script>