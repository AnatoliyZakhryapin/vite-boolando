<script>
    export default {
        data() {
            return {
                cards: [
                    {
                        brand: "Levi's",
                        nameItem: "RELAXED FIT TEE UNISEX",
                        image: "/img/1.webp",
                        imageBack: "/img/1b.webp",
                        price: "29,99",
                        salePrice: "14,99",
                        discount: "-50%",
                        sustainability: "Sostenibilità",
                    },
                    {
                        brand: "Guess",
                        nameItem: "ROSES TEE",
                        image: "/img/2.webp",
                        imageBack: "/img/2b.webp",
                        price: "29,99",
                        salePrice: "20,99",
                        discount: "-50%",
                        sustainability: "",
                    },
                    {
                        brand: "Come Zucchero Filato",
                        nameItem: "VOGLIA DI COLORI PASTELLO",
                        image: "/img/3.webp",
                        imageBack: "/img/3b.webp",
                        price: "184,99",
                        salePrice: "129,99",
                        discount: "-50%",
                        sustainability: "",
                    },
                    {
                        brand: "Levi's",
                        nameItem: "TEE UNISEX",
                        image: "/img/4.webp",
                        imageBack: "/img/4b.webp",
                        price: "29,99",
                        salePrice: "14,99",
                        discount: "-50%",
                        sustainability: "Sostenibilità",
                    },
                    {
                        brand: "Maya Deluxe",
                        nameItem: "STRIPE BODICE",
                        image: "/img/5.webp",
                        imageBack: "/img/5b.webp",
                        price: "",
                        salePrice: "99,99",
                        discount: "",
                        sustainability: "",
                    },
                    {
                        brand: "Esprit",
                        nameItem: "MAGLIONE-BLACK",
                        image: "/img/6.webp",
                        imageBack: "/img/6b.webp",
                        price: "",
                        salePrice: "14,99",
                        discount: "",
                        sustainability: "Sostenibilità",
                    },
                ]
            }
        }
    }

</script>

<template>
      <main>
        <section class="main-section">
            <div class="container">
                <div class="row">
                    <div class="col-4" v-for="card in cards">
                        <div class="card">
                            <figure class="card__image">
                                <img :src="card.image">
                                <img class="image-back" :src="card.imageBack">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <span v-if="card.discount" class="discount-icon"> {{ card.discount }}</span>
                                    <span v-if="card.sustainability" class="sustainability-icon">{{ card.sustainability }}</span>
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">{{ card.brand }}</div>
                                <div class="name-item">{{ card.nameItem }}</div>
                                <div class="price-item">
                                    <span v-if="card.salePrice" class="sale-price">{{ card.salePrice }} &euro;</span>
                                    <span v-if="card.price" class="origine-price">{{ card.price }} &euro;</span>
                                </div>
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
    @use '../styles/partials/mixins' as *;

    .main-section {
        padding: $main-padding;
        row-gap: 30px;

        .card {
            figure {
                position: relative;
                &:hover .image-back {
                    z-index: 0;
                };

                @include heart-icon;
                @include sustainability-icon; 
                @include discount-icon; 
                .discount-line {
                    bottom: 10%;
                    position: absolute;
                    width: 100%;
                };
            };
            .card__text {
                .name-item {
                    font-size: 18px;
                    font-weight: 700;
                };
                .sale-price {
                    color: red;
                    font-weight: 700;
                };
                .origine-price {
                    text-decoration: line-through;
                };
            };
           
        };
    }
</style>