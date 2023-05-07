<template>
  <footer class="mx-auto max-w-5xl px-4 py-24">
    <div class="mx-auto max-w-screen-xl">
      <p class="text-sm text-justify text-left text-gray-600">
        {{ $t('footer.legal-msg') }}
      </p>
      <ul class="flex flex-wrap justify-left my-6 text-gray-400">
        <li>
          <NuxtLink 
            to="/pryncypia" 
            title="Pryncypia Skuteczny Plan Podcast" 
            data-splitbee-event="Pryncypia"
            class="mr-8 underline">{{ $t('footer.principles') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/zasady-korzystania" 
            title="Zasady korzystania z serwisu"
            data-splitbee-event="Zasady korzystania" 
            class="mr-8 underline">{{ $t('footer.terms-of-use') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/polityka-prywatnosci" 
            title="Polityka prywatności serwisu"
            data-splitbee-event="Polityka prywatności" 
            class="mr-8 underline">{{ $t('footer.privacy-policy') }}</NuxtLink>
        </li>
        <li>
          <a 
            href="https://dhosting.pl/pp-leszekkrol" 
            title="Dumnie zasilany przez dhosting.pl" 
            data-splitbee-event="Polecam dhosting.pl" 
            class="underline">{{ $t('footer.proudly-powered') }}</a>
        </li>
      </ul>
      <ul class="flex flex-wrap items-center gap-x-5 justify-left my-6 text-gray-400">
        <li>
          <a 
            href="https://github.com/leszekkrol/skutecznyplan.pl" 
            title="Carbon Neutral" 
            data-splitbee-event="Carbon Neutral" 
            class="underline"><img src="~/assets/carbon-neutral.svg" class="h-8 sm:h-10 md:h-12" /></a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">&copy; 2021-2023 <a href="https://www.leszekkrol.com" title="Leszek Wojciech Król - Strona internetowa" class="hover:underline">Leszek W. Król</a>. {{ $t('footer.all-rights-reserved') }}</span>
    </div>
  </footer>
</template>