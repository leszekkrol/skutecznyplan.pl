<template>
  <header class="mx-auto">
    <div class="max-w-3xl pt-10 px-4 pb-12 sm:py-24 text-center md:mx-auto lg:col-span-6 lg:text-center">
      <div class="text-sm font-semibold uppercase tracking-wide text-gray-300 sm:text-base lg:text-sm xl:text-base">{{ tag }} 🎙</div>
      <h1 class="mt-1 text-5xl tracking-tight leading-10 font-extrabold text-header sm:leading-none sm:text-6xl xl:text-6xl">
        {{ title }}
      </h1>
      <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{{ description }}</p>
      <a 
        v-if="url"
        :href="url" 
        target="_blank"
        data-splitbee-event="Odsłuchaj podcast"
        v-bind:data-splitbee-event-destination="url"
        :title="$t('common.listen')"
        class="mt-5 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">{{ $t('common.listen') }} 🎉</a>
      <NuxtLink 
        v-else
        :to="localePath('/')"
        data-splitbee-event="Strona główna"
        :title="$t('common.homepage')"
        target="_self" 
        class="mt-5 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-3xl text-white bg-gray-700 hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">{{ $t('common.homepage') }}</NuxtLink>
    </div>

    <div class="mx-auto max-w-5xl px-4 py-1 mb-10" v-if="url">
      <p class="mb-10 text-sm uppercase text-center text-gray-300">{{ $t('common.subscribe-msg') }}</p>
      <ul role="list" class="flex items-center justify-center justify-center gap-x-10">
        <li class="flex">
          <a 
            href="https://open.spotify.com/show/0fmWamBZAUB8n6mEuLOJYP" 
            data-splitbee-event="Spotify"
            data-splitbee-event-destination="spotify.com"
            :title="$t('section.header.podcast-spotify')" 
            class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img :alt="$t('section.header.podcast-spotify')" src="~/assets/img/Podcast-Spotify-Icon.png" style="height: 45px !important">
          </a>
        </li>
        <li class="flex">
          <a 
            href="https://podcasts.apple.com/us/podcast/skuteczny-plan-drogowskaz-dla-młodych-przedsiębiorców/id1609627970" 
            data-splitbee-event="Apple Podcasts"
            data-splitbee-event-destination="podcasts.apple.com"
            :title="$t('section.header.podcast-apple')" 
            class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img :alt="$t('section.header.podcast-apple')" src="~/assets/img/Podcast-Apple-Icon.png" style="height: 45px !important">
          </a>
        </li>
        <li class="flex">
          <a 
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84MmE0MjQwL3BvZGNhc3QvcnNz" 
            data-splitbee-event="Google Podcasts"
            data-splitbee-event-destination="podcasts.google.com"
            :title="$t('section.header.podcast-google')" 
            class="transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
            <img :alt="$t('section.header.podcast-google')" src="~/assets/img/Podcast-Google-Icon.png" style="height: 45px !important">
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: ['tag', 'title', 'description', 'url'],
}
</script>