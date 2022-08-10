<template>
  <footer class="mx-auto max-w-5xl px-4 py-24">
    <div class="mx-auto max-w-screen-xl">
      <h2 class="mb-10 text-3xl tracking-tight leading-3 font-extrabold text-gray-600">
        The fine print.
      </h2>
      <p class="text-sm text-justify text-left text-gray-600">
        Informacje zamieszczone na naszej stronie internetowej nie mogą zostać uznane za poradę w jakiejkolwiek sprawie. Treści na niej zawarte mają charakter wyłącznie informacyjny, a my nie ponosimy odpowiedzialności z tytułu powstania jakichkolwiek szkód, wynikających z ich interpretacji, bez konsultacji. Wszystkie materiały udostępnione na naszej stronie internetowej są aktualne na dzień ich zamieszczenia. Nie możemy jednak zagwarantować, że będą aktualne czy przydatne w każdym stanie faktycznym i w każdym czasie. Wszelkie treści zawarte na naszej stronie można wykorzystywać wyłącznie do niekomercyjnego użytku prywatnego. Jeśli chcesz wykorzystać je w celach publicznych lub komercyjnych – napisz do nas.
      </p>
      <ul class="flex flex-wrap justify-left my-6 text-gray-400">
        <li>
          <NuxtLink 
            to="/pryncypia" 
            title="Pryncypia Skuteczny Plan Podcast" 
            data-splitbee-event="Pryncypia"
            class="mr-8 underline">Pryncypia</NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/polityka-prywatnosci" 
            title="Polityka prywatności serwisu"
            data-splitbee-event="Polityka prywatności" 
            class="mr-8 underline">Polityka prywatności</NuxtLink>
        </li>
        <li>
          <a 
            href="https://dhosting.pl/pp-leszekkrol" 
            title="Polityka prywatności serwisu" 
            data-splitbee-event="Polecam dhosting.pl" 
            class="underline">Dumnie zasilany przez dhosting.pl</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">&copy; 2021-2022 <a href="https://www.leszekkrol.com" title="Leszek Wojciech Król - Strona internetowa" class="hover:underline">Leszek W. Król</a>. Wszelkie prawa zastrzeżone.</span>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>