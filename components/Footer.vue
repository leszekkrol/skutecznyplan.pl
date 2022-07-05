<template>
  <footer class="text-sm leading-5 mt-10">
    <div class="flex flex-col justify-between items-start sm:flex-row py-12 md:py-14 px-4 sm:px-6 lg:px-12">
      <div>
        <b>Dodatkowe materiały</b>
        <ul class="text-gray-500">
          <li class="mb0">
            <a href="https://anchor.fm/skuteczny-plan-podcast" target="_blank" title="Odsłuchaj podcast Skuteczny Plan na Spotify lub Anchor" class="flex items-center underline"> Odsłuchaj podcast 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li> 
          <li class="mb0">
            <a href="https://medium.com/@leszekkrol" target="_blank" title="Artykuły Leszek W. Król na Medium" class="flex items-center underline">
              Artukuły na Medium 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li> 
          <li class="mb0">
            <a href="http://linktr.ee/leszekkrol" target="_blank" title="Inne ciekawe projekty Leszek W. Król" class="flex items-center underline">
              Inne projekty Leszka 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="ml-1"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li>
        </ul>
        
        <p class="mt-5 text-gray-500">
          Dumnie zasilany przez <a href="https://dhosting.pl/pp-leszekkrol" target="_blank" title="dhosting.pl wspiera 4dnipracy.pl prowadzony przez Leszek W. Król" class="underline">dhosting.pl</a>
        </p>
      </div>
      <div>
        <ul class="text-gray-500 text-right">
          <li>
            <a href="https://twitter.com/leszekkrol" target="_blank" title="Twitter Leszek W. Król" class="flex items-center justify-end underline text-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mr-1"><path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#575757"></path></svg> 
              @leszekkrol
            </a>
          </li> 
          <li>
            <NuxtLink 
              :to="{ name: 'zasady-korzystania' }"
              class="underline" 
              title="Zasady korzystnia"
              aria-label="Zasady korzystnia">Zasady</NuxtLink>
             · 
            <NuxtLink 
              :to="{ name: 'polityka-prywatnosci' }"
              class="underline" 
              title="Polityka prywatności"
              aria-label="Polityka prywatności">Polityka</NuxtLink>
          </li> 
          <li><p class="pt-3">© 2022 Leszek W. Król</p></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>