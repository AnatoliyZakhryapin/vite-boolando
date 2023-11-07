<script>
    export default {
        props: {
            image: String,
            imageBack: String,
            discount: String,
            sustainability: String,
            brand: String,
            nameItem: String,
            salePrice: String,
            price: String,
        }
    }
</script>

<template>
     <div class="card">
        <figure class="card__image">
            <img :src="image">
            <img class="image-back" :src="imageBack">
            <span class="heart-icon"> &hearts;</span>
            <div class="discount-line">
                <span v-if="discount" class="discount-icon"> {{ discount }}</span>
                <span v-if="sustainability" class="sustainability-icon">{{ sustainability }}</span>
            </div>
        </figure>
        <div class="card__text">
            <div class="brand-title">{{ brand }}</div>
            <div class="name-item">{{ nameItem }}</div>
            <div class="price-item">
                <span v-if="salePrice" class="sale-price">{{ salePrice }} &euro;</span>
                <span v-if="price" class="origine-price">{{ price }} &euro;</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/varibils' as *;
    @use '../styles/partials/mixins' as *;

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
</style>