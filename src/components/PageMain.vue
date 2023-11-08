<script>
    import CardProduct from './CardProduct.vue';
    // import dataBase from '../db.json'; - import dal file json
    import { store } from '../store';
    
    export default {
        data() {
            return {
                // cards: dataBase.products, - import dal file json
                store: store,
                // cards: store.products
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
                    <div class="col-4" v-for="card in store.products">
                        <CardProduct
                            :id="card.id"
                            :frontImage="card.frontImage"
                            :backImage="card.backImage"
                            :brand="card.brand"
                            :nameItem="card.name"
                            :price="card.price"
                            :isInFavorites="card.isInFavorites"
                            :badges="card.badges"                     
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