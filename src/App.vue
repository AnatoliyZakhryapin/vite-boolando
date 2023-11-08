<script>
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';
  import PageMain from './components/PageMain.vue';
  import axios from 'axios';
  import { store } from './store'

  export default {
    components: {
      PageHeader,
      PageMain,
      PageFooter,
    },
    data() {
    return {
        // store: store, 
      }
    },
    created() {
      // axios
      //   .get('http://localhost:3000/products')
      //   .then((response) => {
      //     this.store.products = response.data;
      //     console.log(store, store.products)
      //   })
    },
    mounted() {
      axios
        .get('http://localhost:3000/products')
        .then((response) => {
          // accesso direttamente su store
          store.products = response.data;
          // accesso su key  
          // this.store.products = response.data;
        })
    }
  }
</script>

<template>
  <PageHeader/>
  <PageMain/>
  <PageFooter/>
 
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
