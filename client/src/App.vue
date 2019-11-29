<template>
  <div class="container">
    <Header></Header>
    <Nav></Nav>

    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from './components/Nav.vue';
import MyFooter from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Nav, MyFooter, Header,
  },
};
</script>
