<script>
import PageMenu from "./PageMenu.vue";

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
                            icon: "fa-brands fa-twitter",
                            href: "#"
                        },
                        {
                            icon: "fa-brands fa-instagram",
                            href: "#"
                        },
                        {
                            icon: "fa-brands fa-facebook",
                            href: "#"
                        },
                        {
                            icon: "fa-brands fa-tiktok",
                            href: "#"
                        },
                        {
                            icon: "fa-brands fa-youtube",
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
     <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-6 footer-menu">
                    <PageMenu
                        :title="menuInformazioni.title"
                        :links="menuInformazioni.links"
                    />
                </div>

                <div class="col-6 flex justify-content-flex-end footer-menu">
                    <PageMenu
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