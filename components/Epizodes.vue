<template>
  <section class="tl pb0">
    <div class="container container--narrow"> 
      <h2 class="fs48 heading lhheading mb3 color--black">Odcinki podcastu</h2>

      <article class="project " v-for="item in $store.state.articles" >
        <NuxtLink class="grey b0" :to="`/${item.slug}`">
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <p class="project__tags fs14">
              Odsłuchaj odcinek
            </p>
          </div>
        </NuxtLink>
      </article>
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