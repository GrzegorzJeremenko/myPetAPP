<template>
  <section id="app">
    <router-view />
    <menu-bar v-show="checkLogin()" />
  </section>
</template>

<script>
  import MenuBar from './components/MenuBar.vue';

  export default {
    name: 'App',
    components: {
      MenuBar
    },
    methods: {
      checkLogin() {
        if (localStorage.getItem('user') === null) return 0;
        else return 1;
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    overflow: hidden;
  }

  body {
    line-height: 1;
    margin: 0 !important;
    font-family: 'Open Sans', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face {
    font-family: 'fontello';
    src: url('./font/fontello.eot?57214410');
    src: url('./font/fontello.eot?57214410#iefix') format('embedded-opentype'),
          url('./font/fontello.woff?57214410') format('woff'),
          url('./font/fontello.ttf?57214410') format('truetype'),
          url('./font/fontello.svg?57214410#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  .icon
  {
    font-family: "fontello";
    font-style: normal;
    font-weight: normal;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-left: .2em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>