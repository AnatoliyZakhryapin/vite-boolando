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
    computed: {
      favorites: function() {
        console.log("ciao favorites")
        return this.store.idFavorites
      },
      products: function() {
        console.log("ciao products")
        return this.store.products
      }
    },
    methods: {
      checkFavorites() {
        console.log("array fav start",this.store.idFavorites)
        this.store.products.forEach((product) =>{

          function checkId(id) {
            return id == product.id;
          }

          const isPresentId =  this.favorites.find(checkId);
          console.log(
            "id", product.id, "/",
            product.isInFavorites, "/",
            isPresentId
            )

          if(product.isInFavorites && isPresentId === undefined) {
            store.idFavorites.push(product.id)
          }
        })
          
        console.log("array fav end", this.store.idFavorites)
      },
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
    <div>
      <h1>
        favorit
      </h1>
      <p>{{ favorites }}</p>
      <p>quantita store.products {{ store.products.length }}</p>
      <p>quantita idFavorites {{ favorites.length }}</p>
    </div>
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
