<script>
import Menu from './Menu.vue';

export default {
        data() {
            return {
                headerMenu: "header-menu",
                menuInformazioni: {
                    title: "Boolando s.r.l.",
                    links: [
                        {
                            text: "Informazioni legali",
                            href: "#"
                        },
                        {
                            text: "Informativa sulla privacy",
                            href: "#"
                        },
                        {
                            text: "Diritto di recesso",
                            href: "#"
                        },
                    ]
                },
                menuSocial: {
                    title: "Trovaci anche su",
                    links: [
                        {
                            icon: "/img/twitter.png",
                            href: "#"
                        },
                        {
                            icon: "/img/instagram.png",
                            href: "#"
                        },
                        {
                            icon: "/img/facebook.png",
                            href: "#"
                        },
                        {
                            icon: "/img/tiktok.png",
                            href: "#"
                        },
                        {
                            icon: "/img/youtube.png",
                            href: "#"
                        },
                    ] 
                }
            }
        },
        components: {
            Menu,
        }
    }
</script>

<template>
     <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-6 footer-menu">
                    <Menu
                        :title="menuInformazioni.title"
                        :links="menuInformazioni.links"
                    />
                </div>

                <div class="col-6 flex justify-content-flex-end">
                    <Menu
                        :title="menuSocial.title"
                        :links="menuSocial.links"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @use '../styles/partials/varibils' as *;
    @use '../styles/partials/mixins' as *;

    .page-footer{
        padding: $footer-padding;
        @include footer-color-style;
        @include position-fixed;
        bottom: 0;
        z-index: 2;

        h3 {
            margin-bottom: 10px;
        }

        .footer-menu {
            @include footer-menu;
        }

    };

</style>