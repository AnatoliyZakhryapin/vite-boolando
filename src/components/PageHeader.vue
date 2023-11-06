<script></script>

<template>
    <header class="header-nav">
        <nav class="container">
            <div class="row">
                <div class="col">
                    <ul class="header-nav__gender-menu">
                        <li class="gender-menu__item"><a href="">Donna</a></li>
                        <li class="gender-menu__item"><a href="">Uomo</a></li>
                        <li class="gender-menu__item"><a href="">Bambini</a></li>
                    </ul>
                </div>
                <div class="col">
                    <div class="logo-content">
                        <img class="logo" src="/img/boolean-logo.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <ul class="header-nav__icon-menu">
                        <li class="icon-menu__item"><a href=""><img src="/img/persona.png" alt=""></a></li>
                        <li class="icon-menu__item"><a href=""><img src="/img/cuore.png" alt=""></a></li>
                        <li class="icon-menu__item"><a href=""><img src="/img/borsa.png" alt=""></a></li>
                    </ul>
                </div>
            </div>   
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/varibils' as *;
    @use '../styles/partials/mixins' as *;
    .header-nav{
        padding: $header-padding;
        z-index: 1;
        @include position-fixed;
        @include shadow-header;
        @include header-color-style;

        .row {
            justify-content: space-between;
            align-items: center;
            .col {
                padding: 0px;
            };
        };
        .logo {
            max-height: $header-logo-height;
        };

        ul {
            @include d-flex-align-center;
            a {
                display: block;
                padding: 0 10px;
                line-height: 20px;
            }
            .icon-menu__item {
                font-size: 50px;
                width: 40px;
            }
        };
    }
</style>