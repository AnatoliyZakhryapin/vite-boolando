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
        store: store, 
      }
    },
    methods: {
      checkFavorites() {
        
        // console.log("array favorit",this.store.idFavorites)

        this.store.products.forEach((product) => {
          const idToPush = product.id;

          // let control = false;
          // this.store.idFavorites.forEach((el) => {
          //   if(el == product.id) {
          //     control = true;
          //   }
          //   return control
          // })

          // console.log("id",product.id, product.isInFavorites, "control", control)
          
          if(product.isInFavorites) {
            store.idFavorites.push(idToPush)
          }
          
        }) 
        console.log("array fav", this.store.idFavorites)
      },
      created() {
        // this.checkFavorites()
        // axios
        //   .get('http://localhost:3000/products')
        //   .then((response) => {
        //     this.store.products = response.data;
        //     console.log(store, store.products)
        //  })
      }
    },
    mounted() {
      this.checkFavorites()
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
  <div>
    <button @click="checkFavorites()">
      ciao 
    </button>
  </div>
  <PageMain/>
  <PageFooter/>
 
</template>

<style lang="scss">
  @use './styles/general.scss';
  button {
    margin-top: 100px;
  }
</style>
