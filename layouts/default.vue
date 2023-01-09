<template>
  <main id="app" class="bg-gray-900 v-lines agus">
    <Navigation />
    <Header 
      tag="podcast" 
      title="Pomogę Tobie rozwinąć praktyczne umiejętności zarządzania" 
      description="Zwiększ swoją produktywność podczas codziennej pracy siegając po dostępną, praktyczną i unikalną wiedzę, która pomoże Tobie odmienić sposób w jaki pracujesz każdego dnia."
      url="https://anchor.fm/skuteczny-plan-podcast" />
    <slot />
    <Footer />
  </main>
</template>