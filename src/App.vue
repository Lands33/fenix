<template>
  <div>
    <headerComponent/>
    <RouterView/>  
    <pagehomeComponent/>
    <footerComponent/>
    <campaingComponent/>
  </div>
</template>

<script>
import PageHomeComponent from './pages/page-home.vue'
import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';
import CampaingComponent from './components/campaing.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    HeaderComponent, CampaingComponent, FooterComponent, PageHomeComponent
    
  },
}
</script>

<style>
@import './assets/base.css';
</style>
