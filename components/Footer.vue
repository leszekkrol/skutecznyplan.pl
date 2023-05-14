<template>
  <footer class="mx-auto max-w-5xl px-4 py-24">
    <div class="mx-auto max-w-screen-xl">
      <p class="text-sm text-justify text-left text-gray-600">
        {{ $t('section.footer.legal-msg') }}
      </p>
      <ul class="flex flex-wrap justify-left my-6 text-gray-400">
        <li>
          <NuxtLink 
            :to="localePath('pryncypia')" 
            :title="$t('section.footer.principles')" 
            data-splitbee-event="Pryncypia"
            class="mr-8 underline">{{ $t('section.footer.principles') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            :to="localePath('zasady-korzystania')"
            :title="$t('section.footer.terms-of-use')"
            data-splitbee-event="Zasady korzystania" 
            class="mr-8 underline">{{ $t('section.footer.terms-of-use') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            :to="localePath('polityka-prywatnosci')"
            :title="$t('section.footer.privacy-policy')"
            data-splitbee-event="Polityka prywatności" 
            class="mr-8 underline">{{ $t('section.footer.privacy-policy') }}</NuxtLink>
        </li>
        <li>
          <a 
            href="https://dhosting.pl/pp-leszekkrol" 
            :title="$t('section.footer.proudly-powered')" 
            data-splitbee-event="Polecam dhosting.pl" 
            class="underline">{{ $t('section.footer.proudly-powered') }}</a>
        </li>
      </ul>
      <ul class="flex flex-wrap items-center gap-x-5 justify-left my-6 text-gray-400">
        <li>
          <a 
            href="https://github.com/leszekkrol/skutecznyplan.pl" 
            :title="$t('section.footer.carbon-neutral')" 
            data-splitbee-event="Carbon Neutral" 
            class="underline"><img src="~/assets/carbon-neutral.svg" class="h-8 sm:h-10 md:h-12" /></a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">&copy; 2021-2023 <a href="https://www.leszekkrol.com" :title="$t('section.footer.webpage')" class="hover:underline">Leszek W. Król</a>. {{ $t('section.footer.all-rights-reserved') }}</span>
    </div>
  </footer>
</template>