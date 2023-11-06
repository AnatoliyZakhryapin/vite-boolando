<script></script>

<template>
      <main>
        <section class="main-section">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/1.webp" alt="">
                                <img class="image-back" src="/img/1b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <span class="discount-icon">-50%</span>
                                    <span class="sustainability-icon">Sostenibilità</span>
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Levi's</div>
                                <div class="name-item">RELAXED FIT TEE UNISEX</div>
                                <div class="price-item">
                                    <span class="sale-price">14,99 &euro;</span>
                                    <span class="origine-price">29,99 &euro;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/2.webp" alt="">
                                <img class="image-back" src="/img/2b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <span class="discount-icon">-50%</span>
                                    <!--
                                    <span class="sustainability-icon">Sostenibilità</span>
                                    -->
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Guess</div>
                                <div class="name-item">ROSES TEE</div>
                                <div class="price-item">
                                    <span class="sale-price">20,99 &euro;</span>
                                    <span class="origine-price">29,99 &euro;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/3.webp" alt="">
                                <img class="image-back" src="/img/3b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <span class="discount-icon">-50%</span>
                                    <!--
                                    <span class="sustainability-icon">Sostenibilità</span>
                                    -->
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Come Zucchero Filato</div>
                                <div class="name-item">VOGLIA DI COLORI PASTELLO</div>
                                <div class="price-item">
                                    <span class="sale-price">129,99 &euro;</span>
                                    <span class="origine-price">184,99 &euro;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/4.webp" alt="">
                                <img class="image-back" src="/img/4b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <span class="discount-icon">-50%</span>
                                    <span class="sustainability-icon">Sostenibilità</span>
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Levi's</div>
                                <div class="name-item">TEE UNISEX</div>
                                <div class="price-item">
                                    <span class="sale-price">14,99 &euro;</span>
                                    <span class="origine-price">29,99 &euro;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/5.webp" alt="">
                                <img class="image-back" src="/img/5b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <!--
                                    <span class="discount-icon">-50%</span>
                                    <span class="sustainability-icon">Sostenibilità</span>
                                    -->
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Maya Deluxe</div>
                                <div class="name-item">STRIPE BODICE</div>
                                <div class="price-item">
                                    <span class="sale-price">99,99 &euro;</span>
                                    <!--    
                                    <span class="origine-price"></span>
                                    -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <figure class="card__image">
                                <img src="/img/6.webp" alt="">
                                <img class="image-back" src="/img/6b.webp" alt="">
                                <span class="heart-icon"> &hearts;</span>
                                <div class="discount-line">
                                    <!--
                                    <span class="discount-icon">-50%</span>
                                    -->
                                    <span class="sustainability-icon">Sostenibilità</span>
                                </div>
                            </figure>
                            <div class="card__text">
                                <div class="brand-title">Esprit</div>
                                <div class="name-item">MAGLIONE-BLACK</div>
                                <div class="price-item">
                                    <span class="sale-price">14,99 &euro;</span>
                                    <!--    
                                    <span class="origine-price"></span>
                                    -->
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