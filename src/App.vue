<template>
  <main class="container">
    <header class="header">
      <h1>Chuck Norris Jokes</h1>
      <p class="subtitle">A small Vue 3 app rendered with v-for and a child component</p>
    </header>

    <section class="jokes">
      <ul>
        <ChuckItem
          v-for="(joke, idx) in chuck"
          :key="idx"
          :text="joke.value"
          :index="idx"
        />
      </ul>
    </section>

    <footer class="footer">
      <small>Activity 12 — ChuckJokesVue</small>
    </footer>
  </main>
</template>

<script>
import ChuckItem from './components/ChuckItem.vue'

export default {
  name: 'App',
  components: { ChuckItem },
  data() {
    return {
      chuck: [
        { value: "Chuck Norris can skydive into outer space." },
        { value: "The chief export of Chuck Norris is pain." },
        { value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { value: "Time waits for no man. Unless that man is Chuck Norris." },
        { value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    }
  }
}
</script>

<style scoped>
/* keep light local styles to ensure layout even if global styles change */
.container { max-width:900px; margin:28px auto; padding:18px; color:#e6eef6; }
.header h1 { color:#7dd3fc; margin:0 0 6px 0; }
.jokes ul { list-style:none; padding:0; margin:16px 0; display:grid; gap:10px; }
.footer { margin-top:18px; color:#94a3b8; font-size:0.9rem; }
</style>
