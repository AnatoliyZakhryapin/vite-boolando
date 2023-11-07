<script>
    import PageMenu from './PageMenu.vue';

    export default {
        data() {
            return {
                headerMenu: "header-menu",
                gendersMenu: {
                    links: [
                        {
                            text: "Donna",
                            href: "#"
                        },
                        {
                            text: "Uomo",
                            href: "#"
                        },
                        {
                            text: "Bambini",
                            href: "#"
                        },
                    ]
                },
                iconsMenu: {
                    title: "Title",
                    links: [
                        {
                            icon: "fa-regular fa-user",
                            href: "#"
                        },
                        {
                            icon: "fa-regular fa-heart",
                            href: "#"
                        },
                        {
                            icon: "fa-solid fa-bag-shopping",
                            href: "#"
                        },
                    ] 
                }
            }
        },
        components: {
            PageMenu,
        }
    }
</script>

<template>
    <header class="header-nav">
        <nav class="container">
            <div class="row">
                <div class="col header-menu">
                    <PageMenu
                        :links="gendersMenu.links"
                    />
                </div>
                <div class="col">
                    <div class="logo-content">
                        <img class="logo" src="/img/boolean-logo.png">
                    </div>
                </div>
                <div class="col header-menu">
                    <PageMenu
                        :links="iconsMenu.links"
                    />
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
    }
</style>