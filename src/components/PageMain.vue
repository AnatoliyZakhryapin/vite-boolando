<script>
    import CardProduct from './CardProduct.vue';
    import dataBase from '../db.json';
    
    export default {
        data() {
            return {
                cards: dataBase.products,
            }
        },
        components: {
            CardProduct,
            dataBase,
        }
    }
</script>

<template>
      <main>
        <section class="main-section">
            <div class="container">
                <div class="row">
                    <div class="col-4" v-for="card in cards">
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