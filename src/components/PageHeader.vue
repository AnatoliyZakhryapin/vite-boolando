<script>
    export default {
        data() {
            return {
                gendersMenu: [
                    {
                        title: "Donna",
                        url: "#"
                    },
                    {
                        title: "Uomo",
                        url: "#"
                    },
                    {
                        title: "Bambini",
                        url: "#"
                    },
                ],
                iconsMenu: [
                    {
                        iconUrl: "/img/persona.png",
                        url: "#"
                    },
                    {
                        iconUrl: "/img/cuore.png",
                        url: "#"
                    },
                    {
                        iconUrl: "/img/borsa.png",
                        url: "#"
                    },
                ]
            }
        }
    }
</script>

<template>
    <header class="header-nav">
        <nav class="container">
            <div class="row">
                <div class="col">
                    <ul class="header-nav__gender-menu">
                        <li class="gender-menu__item" v-for="gender in gendersMenu">
                            <a :href="gender.url">{{ gender.title }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="logo-content">
                        <img class="logo" src="/img/boolean-logo.png">
                    </div>
                </div>
                <div class="col">
                    <ul class="header-nav__icon-menu">
                        <li class="icon-menu__item" v-for="icon in iconsMenu">
                            <a :href="icon.url"><img :src="icon.iconUrl"></a>
                        </li>
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