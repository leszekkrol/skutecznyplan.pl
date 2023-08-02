<template>
  <section class="mx-auto max-w-4xl p-10 sm:px-6 text-gray-300">
    <div class="md:flex">
      <div class="md:w-4/12 mb-8 md:mb-0">
        <div class="relative">
          <img src="~/assets/img/avatar.jpg" :alt="$t('section.author.avatar-desc')">
          <div class="image-mask"></div>
          <div class="absolute top-0 left-0 bg-gray-900 w-20 h-8"></div>
          <div class="absolute bottom-0 right-0 bg-gray-900 w-16 h-10"></div>
        </div>
      </div>
      <div class="md:pl-14 md:w-8/12">
        <h2 class="mt-12 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl text-gray-300">
          {{ $t('section.author.title') }} <br><span class="block text-header">Leszek W. Król</span>
        </h2>
        <p class="mt-4 text-lg tracking-tight ">
          {{ $t('section.author.description_1') }}
        </p>
        <p class="mt-4 text-lg tracking-tight">
          {{ $t('section.author.description_2') }}
        </p>
        <p class="mt-4 text-lg tracking-tight">
          {{ $t('section.author.description_3') }}  
        </p>
        <p class="mt-4 text-lg tracking-tight">
          {{ $t('section.author.description_4') }}
        </p>
        <img src="~/assets/img/sign.png" alt="Leszek W. Król - Przedsiębiorca" height="10" class="mt-10">
      </div>
    </div>
  </section>
</template>