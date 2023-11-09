<script>
    import CardProduct from './CardProduct.vue';
    // import dataBase from '../db.json'; - import dal file json
    import { store } from '../store';
    
    export default {
        data() {
            return {
                // cards: dataBase.products, - import dal file json
                store: store,
            }
        },
        components: {
            CardProduct,
        }
    }
</script>

<template>
      <main>
        <section class="main-section">
            <div class="container">
                <div class="row">
                    <div class="col-4" v-for="product in store.products">
                        <CardProduct
                            :id="product.id"
                            :frontImage="product.frontImage"
                            :backImage="product.backImage"
                            :brand="product.brand"
                            :nameItem="product.name"
                            :price="product.price"
                            :isInFavorites="product.isInFavorites"
                            :badges="product.badges"                     
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/varibils' as *;
    .main-section {
        padding: $main-padding;
        row-gap: 30px;
    }
</style>