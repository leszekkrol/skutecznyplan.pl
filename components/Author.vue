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

          <a 
            href="https://universityofgames.net" 
            target="_blank" 
            data-splitbee-event="University of Games"
            data-splitbee-event-destination="universityofgames.net"
            title="University of Games - Społeczność twórców gier" 
            class="underline">
              <strong>University of Games</strong><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="inline ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
          </a> 

          {{ $t('section.author.description_3') }} 
        </p>
        <p class="mt-4 text-lg tracking-tight">
          {{ $t('section.author.description_4') }}  
          <a 
            href="https://napiszprace.pl" 
            target="_blank" 
            data-splitbee-event="Napisz Prace"
            data-splitbee-event-destination="napiszprace.pl"
            title="Napisz Pracę - Wybierz jedno z setek wyzwań z którymi mierzą się przedsiębiorstwa w twojej okolicy." 
            class="underline"><strong>NapiszPrace.pl</strong><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="inline ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
          </a>

          {{ $t('section.author.description_5') }}
        </p>
        <p class="mt-4 text-lg tracking-tight">
          {{ $t('section.author.description_6') }}
          <a 
            href="https://hanzea.tech" 
            target="_blank" 
            data-splitbee-event="Hanzea Tech"
            data-splitbee-event-destination="hanzea.tech"
            title="Hanzea.Tech - rozwiązania dla fintech" 
            class="underline"><strong>HanzeaTech</strong><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="inline ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
          </a>
          {{ $t('section.author.description_7') }} 
        </p>
        <p class="mt-4 text-lg tracking-tight">
          <span class="font-bold underline">{{ $t('section.author.description_8') }}</span> {{ $t('section.author.description_9') }}
        </p>
        <p class="mt-4 text-lg tracking-tight">{{ $t('section.author.description_10') }}</p>
        <p class="mt-4 text-lg tracking-tight">{{ $t('section.author.description_11') }}</p>
        <p class="mt-4 text-lg tracking-tight">{{ $t('section.author.description_12') }}</p>
        <img src="~/assets/img/sign.png" alt="Leszek W. Król - Przedsiębiorca" height="10" class="mt-10">
      </div>
    </div>
  </section>
</template>