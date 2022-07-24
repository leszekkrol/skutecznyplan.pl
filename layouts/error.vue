<template>
  <section class="mx-auto max-w-5xl pt-10 px-4 py-24">
    <div class="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
      <div class="text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">Bład 404</div>
      <h2 class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
        Strona nie została znaleziona
      </h2>
      <div class="flex flex-wrap gap-x-8">
        <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <NuxtLink to="/" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Strona główna</NuxtLink>
        </div>
      </div>
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