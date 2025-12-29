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
            class="mr-8 underline">{{ $t('section.footer.principles') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            :to="localePath('zasady-korzystania')"
            :title="$t('section.footer.terms-of-use')"
            class="mr-8 underline">{{ $t('section.footer.terms-of-use') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            :to="localePath('polityka-prywatnosci')"
            :title="$t('section.footer.privacy-policy')"
            class="mr-8 underline">{{ $t('section.footer.privacy-policy') }}</NuxtLink>
        </li>
      </ul>
      <ul class="flex flex-wrap items-center gap-x-5 justify-left my-6 text-gray-400">
        <li>
          <a 
            href="https://www.carbonneutral.com" 
            :title="$t('section.footer.carbon-neutral')" 
            class="underline">
              <img 
                src="~/assets/svg/carbon-neutral.svg" 
                :alt="$t('section.footer.carbon-neutral')" 
                class="h-8 sm:h-10 md:h-12" />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/leszekkrol/skutecznyplan.pl/" 
            :title="$t('section.footer.open-source')" 
            class="underline">
              <img 
                src="~/assets/svg/open-source.svg" 
                :alt="$t('section.footer.open-source')" 
                class="h-8 sm:h-10 md:h-10" />
          </a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">&copy; 2021-2023 <a href="https://www.leszekkrol.com" :title="$t('section.footer.webpage')" class="hover:underline">Leszek W. Król</a>. {{ $t('section.footer.all-rights-reserved') }}</span>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>