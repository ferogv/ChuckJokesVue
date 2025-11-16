<template>
  <article class="chuck-card card h-100 border-0">
    <div class="card-img-wrap d-flex align-items-center justify-content-center">
      <img :src="icon_url" :alt="altText" class="card-img" />
    </div>

    <div class="card-body d-flex flex-column">
      <h6 class="card-title mb-2 text-accent">Chuck Norris</h6>
      <p class="card-text text-quiet small flex-grow-1">{{ value }}</p>

      <div class="mt-3">
        <button type="button" class="btn btn-sm btn-outline-accent w-100" @click="copyText">
          Copy
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ChuckCard",
  props: {
    icon_url: { type: String, required: true },
    value: { type: String, required: true }
  },
  computed: {
    altText() {
      return "Chuck Norris avatar";
    }
  },
  methods: {
    copyText() {
      const text = this.value;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text);
        this.showToast('Copied');
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        this.showToast('Copied');
      }
    },
    showToast(msg) {
      const el = document.createElement('div');
      el.textContent = msg;
      Object.assign(el.style, {
        position: 'fixed',
        right: '12px',
        bottom: '12px',
        background: 'rgba(11,18,32,0.95)',
        color: 'var(--accent)',
        padding: '8px 12px',
        borderRadius: '6px',
        zIndex: 9999,
        boxShadow: '0 6px 20px rgba(3,7,18,0.6)'
      });
      document.body.appendChild(el);
      setTimeout(() => document.body.removeChild(el), 900);
    }
  }
}
</script>

<style scoped>
    .text-accent { color: var(--accent); font-weight:700;
    }
    .card-text { color: #e2f0ff; }   /* bright, readable punchline text */
    .card-title { color: #bfe9ff; }  /* slightly softer than accent */
    .card-body { color: #dceffb; }   /* ensures all body text is readable */
    .btn-outline-accent { color: var(--accent); border-color: rgba(125,211,252,0.14);
    }

    /* ensure any small helper text is visible */
    .small, .small-text, .subtitle { color: #c6dff3;
    }

    /* override any low-opacity rules that accidentally dim text too much */
    .card-text, .joke-text, .subtitle {
    color: rgba(230,238,246,0.95);
    }

    /* Make the card a true flex item that fills its column */
    .chuck-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;        /* grow and shrink equally, basis 0 prevents uneven sizing */
    width: 100%;        /* ensure it fills the column width */
    min-height: 220px;  /* optional: baseline height to keep visual consistency */
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 6px 22px rgba(3,7,18,0.55);
    border: 1px solid rgba(255,255,255,0.03);
    }

    /* Keep the image area fixed height but responsive width */
    .card-img-wrap {
    flex: 0 0 140px;   /* fixed area that does not grow or shrink */
    padding: 18px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(255,255,255,0.02);
    }

    /* avatar image scales inside the wrapper */
    .card-img {
    max-height: 104px;
    max-width: 100%;
    height: auto;
    width: auto;
    object-fit: contain;
    display:block;
    }

    /* Make body stretch to fill remaining vertical space */
    .card-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;    /* grow to fill vertical space and shrink when needed */
    padding: 14px;
    }

    /* Make the description area take remaining body space so footer/button sits aligned */
    .card-text {
    flex: 1 1 auto;
    margin: 0 0 8px 0;
    color: #cbd7e6;
    line-height: 1.3;
    }

    /* Ensure the button is fixed at the bottom of the card body */
    .btn-outline-accent {
    align-self: stretch;
    }

    /* Small responsive tweak: reduce min-height on very small screens */
    @media (max-width: 576px) {
    .chuck-card { min-height: 180px; }
    .card-img-wrap { flex: 0 0 110px; padding: 12px; }
    .card-img { max-height: 84px; }
    }
</style>
