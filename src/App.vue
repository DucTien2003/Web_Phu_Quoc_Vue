<template>
  <div id="app">
    <fixed-elements />
    <header-comp />
    <router-view />
    <footer-comp />
  </div>
</template>

<script>
import FixedElements from "./components/FixedElements.vue";
import HeaderComp from "./components/HeaderComp.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    FixedElements,
    HeaderComp,
    FooterComp: Footer
  }
};
</script>
