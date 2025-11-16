<template>
  <main class="container py-4">
    <header class="text-center mb-4">
      <h1 class="display-6 text-info">Chuck Norris Jokes</h1>
      <p class="text-muted">Responsive cards — 3 per row on large screens, 2 on medium, 1 on small</p>
    </header>

    <section class="row g-3">
      <div
        v-for="(joke, idx) in chuck"
        :key="idx"
        class="col-12 col-md-6 col-lg-4 d-flex"
      >
        <ChuckCard :icon_url="joke.icon_url" :value="joke.value" />
      </div>
    </section>

    <footer class="text-center mt-4 text-muted small">
      Activity 10 — ChuckJokesVue
    </footer>
  </main>
</template>

<script>
import ChuckCard from './components/ChuckCard.vue'

export default {
  name: 'App',
  components: { ChuckCard },
  data() {
    return {
      chuck: [
        { icon_url: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG24.png", value: "Chuck Norris can skydive into outer space." },
        { icon_url: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG11.png", value: "The chief export of Chuck Norris is pain." },
        { icon_url: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG23.png", value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { icon_url: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG8.png", value: "Time waits for no man. Unless that man is Chuck Norris." },
        { icon_url: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG18.png", value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    }
  }
}
</script>

<style scoped>
main { max-width: 1100px; margin: 0 auto; }
.header h1 { color: var(--accent); margin: 0; font-weight: 700; }
.header .subtitle { color: var(--muted); margin-top: 6px; }
main.container { padding-top: 28px; padding-bottom: 28px; }

</style>
