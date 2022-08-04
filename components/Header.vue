<template>
  <header class="mx-auto bg-fancy">
    <div class="max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-center md:mx-auto lg:col-span-6 lg:text-center">
      <div class="text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">{{ tag }} 🎙</div>
      <h2 class="mt-1 text-5xl tracking-tight leading-10 font-extrabold text-header sm:leading-none sm:text-6xl xl:text-6xl">
        {{ title }}
      </h2>
      <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{{ description }}</p>
      <a href="https://anchor.fm/skuteczny-plan-podcast" target="_blank" class="mt-5 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Odsłuchaj podcast teraz 🎉</a>
    </div>
  </header>
</template>

<script>
export default {
  props: ['tag', 'title', 'description'],
  data() {
    return {

    }
  },
}
</script>