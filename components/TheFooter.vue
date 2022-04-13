<template>
  <footer class="fs16 section--full-padded">
    <div class="container container--wide cols">
      <div class="col col--two mb2 tl">
        <b>Dodatkowe materiały</b><br>
        <ul class="footer-list color-grey">
          <li class="mb0">
            <a href="https://anchor.fm/skuteczny-plan-podcast" target="_blank" title="Odsłuchaj podcast Skuteczny Plan na Spotify lub Anchor">
              Odsłuchaj podcast <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li>
          <li class="mb0">
            <a href="http://medium.com/@leszekkrol" target="_blank" title="Skuteczny Plan Podcast na Medium">
              Artukuły na Medium <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li>
          <li class="mb0">
            <a href="http://linktr.ee/leszekkrol" target="_blank" title="Inne ciekawe projekty Leszek W. Król">
              Inne projekty Leszka <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><g fill="#8c8c8c"><path d="M8.293 2.293L4.586 6 6 7.414l3.707-3.707L12 6V0H6l2.293 2.293z"></path><path d="M10 10H2V2h2V0H2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8h-2z"></path></g></svg>
            </a>
          </li>
        </ul>
        <div class="mt2">Dumnie zasilany przez <a href="https://dhosting.pl/pp-leszekkrol" target="_blank" title="dhosting.pl wspiera podcast Skuteczny Plan prowadzony przez Leszek W. Król">dhosting.pl</a></div>
      </div>
      <div class="col col--two mb2 tr">
        <ul class="footer-list color-grey">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#575757"></path></svg> <a href="https://twitter.com/leszekkrol" target="_blank" title="Twitter Leszek W. Król">@leszekkrol</a>
          </li>
          <li>
            <NuxtLink 
              :to="{ name: 'zasady-korzystania' }"
              class="color-grey" 
              aria-label="Zasady korzystnia">Zasady</NuxtLink>
             · 
            <NuxtLink 
              :to="{ name: 'polityka-prywatnosci' }"
              class="color-grey" 
              aria-label="Polityka prywatności">Polityka</NuxtLink>
          </li>
          <li><small>© 2022 Leszek W. Król</small></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>