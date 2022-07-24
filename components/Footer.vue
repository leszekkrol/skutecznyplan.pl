<template>
  <footer class="mx-auto max-w-5xl px-4 pb-6 sm:py-24">
    <div class="mx-auto max-w-screen-xl">
      <p class="text-sm text-justify text-left text-gray-700">
        Informacje zamieszczone na naszej stronie internetowej nie mogą zostać uznane za poradę w jakiejkolwiek sprawie. Treści na niej zawarte mają charakter wyłącznie informacyjny, a my nie ponosimy odpowiedzialności z tytułu powstania jakichkolwiek szkód, wynikających z ich interpretacji, bez konsultacji. Wszystkie materiały udostępnione na naszej stronie internetowej są aktualne na dzień ich zamieszczenia. Nie możemy jednak zagwarantować, że będą aktualne czy przydatne w każdym stanie faktycznym i w każdym czasie. Wszelkie treści zawarte na naszej stronie można wykorzystywać wyłącznie do niekomercyjnego użytku prywatnego. Jeśli chcesz wykorzystać je w celach publicznych lub komercyjnych – napisz do nas.
      </p>

      <ul class="flex flex-wrap justify-left my-6 text-white">
        <li>
          <NuxtLink to="/pryncypia" title="Pryncypia" class="mr-8 hover:underline">Pryncypia</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/polityka-prywatnosci" title="Polityka prywatności serwisu" class="mr-8 hover:underline">Polityka prywatności</NuxtLink>
        </li>
        <li>
          <a href="https://dhosting.pl/pp-leszekkrol" title="Polityka prywatności serwisu" class="hover:underline">Dumnie zasilany przez dhosting.pl 🛠</a>
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