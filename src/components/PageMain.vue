<script>
    import CardProduct from './CardProduct.vue';
    
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
                    <div class="col-4" v-for="card in cards">
                        <CardProduct
                            :image="card.image"
                            :imageBack="card.imageBack"
                            :discount="card.discount"
                            :sustainability="card.sustainability"
                            :brand="card.brand"
                            :nameItem="card.nameItem"
                            :salePrice="card.salePrice"
                            :price="card.price"
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