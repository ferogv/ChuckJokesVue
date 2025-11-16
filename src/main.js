import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

createApp(App).mount('#app')

// Child component: receives a text prop and displays it
Vue.component('chuck-item', {
  props: ['text', 'index'],
  template: `
    <li class="joke-card">
      <div class="joke-index">#{{ index + 1 }}</div>
      <div class="joke-text">{{ text }}</div>
      <button class="copy-btn" @click="copyText">Copy</button>
    </li>
  `,
  methods: {
    copyText() {
      // simple copy to clipboard (graceful fallback)
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(this.text);
        alert('Copied to clipboard');
      } else {
        // fallback
        const el = document.createElement('textarea');
        el.value = this.text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Copied to clipboard');
      }
    }
  }
});

// Vue root instance
new Vue({
  el: '#app',
  data: {
    chuck: [
      { value: "Chuck Norris can skydive into outer space." },
      { value: "The chief export of Chuck Norris is pain." },
      { value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
      { value: "Time waits for no man. Unless that man is Chuck Norris." },
      { value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
    ]
  }
});
