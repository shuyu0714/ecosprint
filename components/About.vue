<template>
    <section>
        <div class="wrapper">
            <div class="about-ecosprint d-grid align-items-center">
                <div class="ecosprint-brand text-center">
                    <NuxtImg src="/icon/logo-ecosprint-green.svg" class="img-fluid" alt="EcoSprint 奔奔 Logo" />
                    <h1 class="text-primary">生態友善寵食</h1>
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
                    <p class="mb-0">
                        奔奔的首支商品正在嘖嘖募資
                        請與我們一起為生態為環境盡一份心力吧！
                    </p>
                </div>
            </div>
            <NuxtImg src="/img/img-about.svg" class="img-fluid w-100" alt="EcoSprint 奔奔 Logo" />
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section {
    padding: 120px 0 64px;
    @media screen and (max-width: 767px) {
        padding: 38px 0 32px;
    }
    .wrapper {
        width: 90.67%;
        margin: auto;
        @media screen and (min-width: 768px) {
            width: 75.6667vw;
        }
        @media screen and (min-width: 1200px) {
            width: 66.6667vw;
        }
    }
}
.about-ecosprint {
    margin: 0 auto 5.46875%;
    @media screen and (min-width: 768px) {
        width: 80.9375%;
        grid-template-columns: max-content 52.7079%;
        justify-content: space-between;
    }
    @media screen and (min-width: 1200px) {
        width: 75.9375%;
        grid-template-columns: max-content 46.7079%;
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
            width: 15.3125vw;
            @media screen and (max-width: 767px) {
                width: 115px;
            }
        }
        .slogan {
            img {
                width: 20.834vw;
                @media screen and (max-width: 767px) {
                    width: 165px;
                }
            }
        }
    }
    .ecosprint-intro {
        @media screen and (max-width: 767px) {
            // width: 67.059%;
            width: 90.059%;
            margin: 16px auto 0;
        }
    }
    h1 {
        font-size: 48px;
        font-weight: 900;
        margin: 24px 0 28px;
        font-size: clamp(36px, 2.5vw, 48px);
        @media screen and (max-width: 767px) {
            // font-size: clamp(24px, 6.4vw, 28px);
            font-size: 24px;
            margin: 10px 0 16px;
        }
    }
    p { 
        font-size: clamp(16px, 1.04167vw, 20px);
        @media screen and (max-width: 767px) {
            font-size: 15px;
        }
    }
}
</style>