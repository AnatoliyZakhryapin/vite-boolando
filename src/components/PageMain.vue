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
            showModal(product, price, salePrice) {
                console.log('show modal')
                this.open = true;
                this.productSelected.product = product;
                this.productSelected.price = price;
                if(salePrice){
                    this.productSelected.salePrice = salePrice;
                }
                console.log(price, "saòe", salePrice)
            },
            closeModal() {
                this.open = false
            },
            isDiscount(badge){
                return badge.type === "discount";
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
                    <div class="card__carousel">
                        <figure class="card__carousel__image">
                            <img :src="'/img/' + productSelected.product.frontImage">
                        </figure>
                    </div>
                    <div class="card__text">
                        <div class="card__text__header">
                        <h1>
                           {{ productSelected.product.brand }}
                        </h1>
                        <font-awesome-icon @click="closeModal" :icon="['far', 'circle-xmark']" />   
                    </div>
                    <div class="card__text__body">
                        <p class="product-name"> {{ productSelected.product.name }}</p>
                        <p class="product-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ullam voluptatem dolor cumque, molestiae nobis. Corporis iste adipisci quasi consequatur quos error, rem vero? Illo provident cum quis eos aliquid.
                        </p>
                    </div>
                    <div class="card__text__footer">
                       <div class="price-item">
                            <span v-if="productSelected.salePrice">{{ productSelected.salePrice }} &euro;</span>
                            <span >{{ productSelected.price }} &euro;</span>
                       </div>
                    </div>
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
        max-width: 600px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        display: flex;
        gap: 20px;
        .card__carousel {
            width: 40%;
            flex-shrink: 0;
        }

        .card__text {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            .card__text__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .card__text__body {
                .product-name {
                    margin-bottom: 20px;
                }
                .product-description {
                    font-size: 12px;
                }
            }
            .card__text__footer {
                margin-top: auto;
                .price-item {
                & > :first-child {
                    color: red;
                    font-weight: 700;
                    margin-right: 5px;
                }
                & > :nth-child(2) {
                    text-decoration: line-through;
                }
            }
            }
        }
    }

</style>