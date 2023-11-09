<script>
    import CardProduct from './CardProduct.vue';
    // import dataBase from '../db.json'; - import dal file json
    import { store } from '../store';
    
    export default {
        data() {
            return {
                // cards: dataBase.products, - import dal file json
                store: store,
                open: false,
                productSelected: {}
            }
        },
        components: {
            CardProduct,
        },
        methods: {
            showModal(product) {
                console.log('show modal')
                this.open = true;
                this.productSelected = product;
            },
            closeModal() {
                this.open = false
            },
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
                            :item="product"
                            :id="product.id"
                            :frontImage="product.frontImage"
                            :backImage="product.backImage"
                            :brand="product.brand"
                            :nameItem="product.name"
                            :price="product.price"
                            :isInFavorites="product.isInFavorites"
                            :badges="product.badges"
                            @show="showModal"                     
                        />
                    </div>
                </div>
            </div>

            <div v-if="open" class="modal">
                <div class="card">
                    <div class="card__header">
                        <span>
                           {{ productSelected.brand }}
                        </span>
                        <font-awesome-icon @click="closeModal" :icon="['far', 'circle-xmark']" />   
                    </div>
                    <div class="card__body">
                        <p> {{ productSelected.name }}</p>
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

    .modal::after {
        content: '';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 40;
        background-color: rgba(0,0,0,0.5);
    }

    .modal .card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 50;
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);

        .card__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 22px;
            font-weight: 700;
        }

    }

</style>