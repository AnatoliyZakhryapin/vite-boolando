<script></script>

<template>
     <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="widget">
                        <h3 class="widget__title">Boolando s.r.l.</h3>
                        <ul class="widget__menu">
                            <li class="widget__menu__item">
                                <a href="">Informazioni legali</a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">Informativa sulla privacy</a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">Diritto di recesso</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 flex justify-content-flex-end">
                    <div class="widget">
                        <h3 class="widget__title">Trovaci anche su</h3>
                        <ul class="widget__menu">
                            <li class="widget__menu__item">
                                <a href="">
                                    <img src="/img/twitter.png" alt="">
                                </a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">
                                    <img src="/img/instagram.png" alt="">
                                </a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">
                                    <img src="/img/facebook.png" alt="">
                                </a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">
                                    <img src="/img/tiktok.png" alt="">
                                </a>
                            </li>
                            <li class="widget__menu__item">
                                <a href="">
                                    <img src="/img/youtube.png" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
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

        ul {
            display: flex;
            li {
                margin-right: 15px;
                img {
                    width: 20px;
                };
            };
        };  
    };

</style>