<template>
  <div id="app">
    <header><Header></Header></header>
    <main><Main></Main></main>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}

</script>

<style>
@import "/assets/css/style.css";
</style>
