<template>
  <header class="mx-auto bg-fancy">
    <div class="max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-center md:mx-auto lg:col-span-6 lg:text-center">
      <div class="text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">{{ tag }} 🎙</div>
      <h2 class="mt-1 text-5xl tracking-tight leading-10 font-extrabold text-header sm:leading-none sm:text-6xl xl:text-6xl">
        {{ title }}
      </h2>
      <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{{ description }}</p>


      <a 
        v-if="url"
        :href="url" target="_blank" class="mt-5 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Odsłuchaj podcast teraz 🎉</a>
      <NuxtLink 
        v-else
        to="/" 
        target="_blank" class="mt-5 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Strona główna</NuxtLink>
    </div>

    <div class="mx-auto max-w-5xl px-4 py-1 mb-10">
      <p class="mb-10 text-sm uppercase text-center text-gray-300">Zasubskrybuj na ulubionej platformie podcastów:</p>
      <ul role="list" class="flex items-center justify-center justify-center gap-x-10">
        <li class="flex">
          <a href="https://open.spotify.com/show/0fmWamBZAUB8n6mEuLOJYP" class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img alt="Skuteczny Plan - podcast na Spotify" src="~/assets/img/Podcast-Spotify-Icon.png" style="height: 45px !important">
          </a>
        </li>
        <li class="flex">
          <a href="https://podcasts.apple.com/us/podcast/skuteczny-plan-drogowskaz-dla-młodych-przedsiębiorców/id1609627970" class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img alt="Skuteczny Plan - podcast na Apple Podcast" src="~/assets/img/Podcast-Apple-Icon.png" style="height: 45px !important">
          </a>
        </li>
        <li class="flex">
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84MmE0MjQwL3BvZGNhc3QvcnNz" class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img alt="Skuteczny Plan - podcast na Google Podcast" src="~/assets/img/Podcast-Google-Icon.png" style="height: 45px !important">
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: ['tag', 'title', 'description', 'url'],
  data() {
    return {

    }
  },
}
</script>