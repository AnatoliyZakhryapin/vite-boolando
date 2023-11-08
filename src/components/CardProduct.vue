<script>
    export default {
        props: {
            id: Number,
            frontImage: String,
            backImage: String,
            brand: String,
            nameItem: String,
            price: Number,
            isInFavorites: Boolean,
            badges: Array,
        },
        data() {
            return {
                isFavoriteCard: this.isInFavorites,
            }
        },
        methods: {
            salePrice(price, array){
                let scontoSting;
                array.forEach(element => {
                    if(element.type === "discount"){
                        scontoSting = element.value;
                    }
                });
                const sconto = Math.abs(Number(scontoSting.replace(/%/g, ""))) / 100;
                const salePrice = price - (price * sconto);
                return salePrice.toPrecision(4);
            },
            isDiscount(array){
                let isDiscount = false;
                array.forEach(element => {
                    if(element.type === "discount"){
                        isDiscount = true;
                    }
                });
                return isDiscount;
            },
            addToFavorites(){
                this.isFavoriteCard = !this.isFavoriteCard
            }
        }
    }
</script>

<template>
     <div class="card">
        <figure class="card__image">
            <img :src="'/img/' + frontImage">
            <img class="image-back" :src="'/img/' + backImage">
            <span 
                class="heart-icon" 
                :class="{ 'in-favorites' : this.isFavoriteCard}"
               @click="addToFavorites()"
            > 
                &hearts;
            </span>
            <div class="discount-line">
                <!-- DISCOUN -->
                <span 
                    v-for="(badge,i) in badges" 
                    :key="i"
                    :class="badge.type === 'tag'? 'sustainability-icon' : 'discount-icon' "
                >
                    {{ badge.value }}
                </span>
                <!-- <span v-if="discount" class="discount-icon"> {{ discount }}</span> -->
                <!-- <span v-if="sustainability" class="sustainability-icon">{{ sustainability }}</span> -->
            </div>
        </figure>
        <div class="card__text">
            <div class="brand-title">{{ brand }}</div>
            <div class="name-item">{{ nameItem }}</div>
            <div class="price-item">
                <!-- pricesale -->
                <span v-if="isDiscount(badges)">{{ salePrice(price, badges) }} &euro;</span>
                <span v-if="price">{{ price }} &euro;</span>
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
        };
    };
</style>