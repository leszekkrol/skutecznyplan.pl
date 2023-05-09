4<template>
  <nav class="container flex justify-center md:justify-end pt-4 px-4 sm:px-6 mx-auto md:pt-6 max-w-8xl lg:px-28">
    <a 
      href="http://buycoffee.to/leszekkrol" 
      data-splitbee-event="Wspieraj twórczość"
      data-splitbee-event-destination="buycoffee.to"
      :title="$t('common.support')" 
      class="items-center justify-center leading-6 text-sm font-medium px-4 py-2 text-white border border-zinc-300 border-opacity-30 rounded-[48px] flex">
      {{ $t('common.support') }}
      <svg class="w-3 h-3 ml-2" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00012 1L8.00012 5L4.00012 9" stroke="#6E7F84" stroke-width="2" stroke-linejoin="round"></path>
        <path d="M8.00012 5H0.00012207" stroke="#6E7F84" stroke-width="2" stroke-linejoin="round"></path>
      </svg>
    </a>
  </nav>
</template>