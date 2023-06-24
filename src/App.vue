<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>

  <header>
    <Header title="ms21826's Page"/>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    <Footer/>
  </footer>

</template>

