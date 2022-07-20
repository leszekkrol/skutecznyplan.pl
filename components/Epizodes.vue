<template>
  <section>
    <div class="mx-auto max-w-5xl pt-10 px-4 pb-12 sm:py-24">
      <div class="grid gap-8 md:grid-cols-2">
        

        <article class="p-6 bg-gray-800 border border-transparent shadow-md" v-for="item in $store.state.articles">

            <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-gray-700 text-gray-400 text-xs font-medium uppercase tracking-wide text-gray-300 inline-flex items-center px-2.5 py-0.5 rounded ">
                    Artykuł 🔖
                </span>
                <span class="text-sm">14 days ago</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white"><a href="#">{{ item.title }}</a></h2>
            <p class="mb-5 font-light text-gray-400">{{ item.description }}</p>
            <NuxtLink class="text-gray-400 hover:underline" :to="`/${item.slug}`">Czytaj więcej 🔖</NuxtLink>  
        </article>   


      </div>  
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>