<template>
  <section class="bg-gray-800">
    <div class="mx-auto max-w-5xl pt-10 px-8 pb-12 sm:py-24">
      <div class="md:mx-auto lg:col-span-6 lg:text-left text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-white">
          {{ $t('section.principles.title') }}
        </h2>
        <p class="mb-4 font-light">
          {{ $t('section.principles.description') }}
        </p>
        <ul class="mb-4 font-light list-disc ml-5" v-for="item in tm('section.principles.rules')">
          <li> {{ rt(item) }}</li>
        </ul>   
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { tm, rt } = useI18n();

useHead({
  title: 'Pryncypia | Skuteczny Plan',
  meta: [
    { hid: 'title', name: "title", content: "Pryncypia | Skuteczny Plan" },
    { hid: "description", name: "description", content: "Pryncypia [z łacińskiego prīncipium, „początek, fundament”]. Podstawowa prawda lub propozycja, która służy jako podstawa systemu przekonań, zachowań lub łańcucha rozumowania." },
    { hid: "twitter:image", name: "twitter:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-twitter.png" },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "og:image",name: "og:image", content: "https://www.skutecznyplan.pl/skuteczny-plan-og.png" },
    { hid: "og:title", name: "og:title", content: "Pryncypia | Skuteczny Plan"  },
    { hid: "og:description", name: "og:description", content: "Pryncypia [z łacińskiego prīncipium, „początek, fundament”]. Podstawowa prawda lub propozycja, która służy jako podstawa systemu przekonań, zachowań lub łańcucha rozumowania." },
    { hid: "description", name: "description", content: "Pryncypia [z łacińskiego prīncipium, „początek, fundament”]. Podstawowa prawda lub propozycja, która służy jako podstawa systemu przekonań, zachowań lub łańcucha rozumowania." },
    { hid: "og:url", name: "og:url", content: "https://www.skutecznyplan.pl" + route.params.fullPath }
  ],
})

defineI18nRoute({
  paths: {
    pl: '/pryncypia',
    en: '/principles'
  }
})
</script>