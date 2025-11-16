<template>
  <li class="joke-card">
    <div class="joke-index">#{{ index + 1 }}</div>
    <div class="joke-text">{{ text }}</div>
    <button class="copy-btn" @click="copyText">Copy</button>
  </li>
</template>

<script>
export default {
  name: 'ChuckItem',
  props: { text: String, index: Number },
  methods: {
    copyText() {
      const t = this.text;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(t);
        // use a non-blocking notification method in production
        alert('Copied to clipboard');
      } else {
        const el = document.createElement('textarea');
        el.value = t;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Copied to clipboard');
      }
    }
  }
}
</script>

<style scoped>
/* keep your current small-scope styles or leave as-is */
</style>
