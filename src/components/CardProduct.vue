<script>
    import { store } from '../store';

    export default {
        props: {
            item: Object,
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
                // isFavoriteCard: this.isInFavorites,
                store: store,
                index: 0
            }
        },
        methods: {
            getSalePriceModal(){
                let salePriceM;
                if(!this.salePrice(this.price, this.badges)){
                    salePriceM = "undefined"
                } else {
                    salePriceM = this.salePrice(this.price, this.badges)
                }
                console.log(salePriceM)
                return salePriceM
            },
            salePrice(price, array){
                let scontoSting = "-0%";
                let sconto;
                array.forEach(element => {
                    if(element.type === "discount"){
                        scontoSting = element.value;
                    }
                });
                sconto = Math.abs(Number(scontoSting.replace(/%/g, ""))) / 100;
                const salePrice = price - (price * sconto);
                return salePrice.toFixed(2);
            },
            // isDiscount(array){
            //     let isDiscount = false;
            //     array.forEach(element => {
            //         if(element.type === "discount"){
            //             isDiscount = true;
            //         }
            //     });
            //     return isDiscount;
            // },
            isDiscount(){
               return this.badges.find(function(badge){
                    return badge.type === "discount";
                })
            },
            addToFavorites(){
                // this.store. = !this.isFavoriteCard
                const index = this.id - 1; 
                console.log(index)
                this.store.products[index].isInFavorites = !this.store.products[index].isInFavorites
            },
            onClick() {
                console.log(this.store.idFavorites)
            }
        }
    }
</script>

<template>
     <!-- <div class="card"  @click="$emit('show', item, price, getSalePriceModal())"> -->
        <div class="card"  @click="$emit('show',item, salePrice(price, badges), isDiscount()  )">
        <figure class="card__image">
            <img :src="'/img/' + frontImage">
            <img class="image-back" :src="'/img/' + backImage">
            <span 
                class="heart-icon" 
                :class="{ 'in-favorites' :  isInFavorites}"
               @click="addToFavorites(), onClick()"
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
                <!-- <span v-if="isDiscount(badges)">{{ salePrice(price, badges) }} &euro;</span> -->
                <span v-if="isDiscount()">{{ salePrice(price, badges) }} &euro;</span>
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