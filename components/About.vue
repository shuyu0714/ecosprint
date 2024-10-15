<template>
    <section>
        <div class="wrapper">
            <div class="about-ecosprint d-grid align-items-center">
                <div class="ecosprint-brand text-center">
                    <NuxtImg src="/icon/logo-ecosprint-green.svg" class="img-fluid" alt="EcoSprint 奔奔 Logo" />
                    <h1 class="text-primary my-md-4">生態友善寵食</h1>
                    <div class="slogan">
                        <NuxtImg src="/img/img-slogan.svg" class="img-fluid" alt="EcoSprint 奔奔 - 關懷土地、寵愛毛孩，這份愛永續不停歇" />
                    </div>
                </div>
                <div class="ecosprint-intro text-center">
                    <p>
                        我們是一群熱愛毛孩的綠色消費者，市面上的寵物食品少有兼具營養保健又能支持綠色永續的商品
                    </p>
                    <p>
                        我們希望能夠打造MIT、平價且優質的寵食
                        除了將台灣特色的農產品發展成商業寵食
                        更進一步希望能將農食教育帶入
                        並促進家庭成員互動
                    </p>
                    <p>
                        奔奔的首支商品正在嘖嘖募資
                        請與我們一起為生態為環境盡一份心力吧！
                    </p>
                </div>
            </div>
            <NuxtImg src="/img/img-about.svg" class="img-fluid" alt="EcoSprint 奔奔 Logo" />
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section {
    padding: 150px 0;
    @media screen and (max-width: 767px) {
        padding: 32px 18px;
    }
    .wrapper {
        margin: auto;
        @media screen and (min-width: 768px) {
            width: 66.6667%;
        }
    }
}
.about-ecosprint {
    margin-bottom: 5.46875%;
    @media screen and (min-width: 768px) {
        width: 85.9375%;
        grid-template-columns: 38.18182% 1fr;
        gap: 0 20.7272%;
    }
    @media screen and (max-width: 767px) {
        margin-bottom: 32px;
    }
    .ecosprint-brand {
        @media screen and (max-width: 767px) {
            width: 48.675%;
            margin: auto;
        }
        > img {
            @media screen and (max-width: 767px) {
                width: 69.69697%;
            }
        }
    }
    .ecosprint-intro {
        @media screen and (max-width: 767px) {
            width: 67.26%;
            margin: 16px auto 0;
        }
    }
    h1 {
        font-size: 64px;
        font-weight: 900;
        @media screen and (max-width: 767px) {
            font-size: clamp(24px, 6.4vw, 28px);
            margin: 9px 0 16px;
        }
    }
    p {
        font-size: 24px;
        @media screen and (max-width: 767px) {
            font-size: clamp(12px, 3.2vw, 16px);
        }
    }
}
</style>