<template>
    <section>
        <div class="wrapper">
            <swiper-container
                v-if="thumbsSwiper !== null"
                :loop="true"
                :slides-per-view="1"
                :centered-slides="true"
                :effect="coverflow"
                :navigation="false"
                class="mainProduct"
            >
                <swiper-slide v-for="product in products" :key="product.id">
                    <div class="product d-flex align-items-start justify-content-center">
                        <div class="name">
                            <h2 class="zh">{{ product.name }}</h2>
                            <h2 class="en">{{ product.en }}</h2>
                        </div>
                        <div class="cover ratio">
                            <NuxtImg class="img-fluid" :src="`/img/2_products/img-product-${product.image}.png`" />
                        </div>
                        <div class="intro">
                            <p class="mb-0">{{ product.des }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>

            <ul class="settingsList list-unstyled d-flex justify-content-between align-items-end">
                <li class="product d-flex align-items-start justify-content-center"
                    v-for="product in products" :key="product.id">
                    <div class="cover ratio">
                        <NuxtImg class="img-fluid" :src="`/img/2_products/img-product-${product.image}.png`" />
                    </div>
                </li>
                <li class="product d-flex align-items-start justify-content-center"
                    v-for="product in products" :key="product.id">
                    <div class="cover ratio">
                        <NuxtImg class="img-fluid" :src="`/img/2_products/img-product-${product.image}.png`" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();

const products = ref([
    { id: 1, image: '香燉嫩雞', name: '香燉嫩雞', en: 'chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 2, image: '白帶魚雞肉', name: '白帶魚 & 雞肉', en: 'Hairtail & Chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 3, image: '極鮮烏魚', name: '極鮮烏魚', en: 'mullet',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 4, image: '水針虱目魚', name: '水針 & 虱目魚', en: 'Needlefish & Milkfish',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
])

</script>

<style lang="scss" scoped>
@import "swiper/css";

@import "swiper/css/free-mode";
@import "swiper/css/navigation";
@import "swiper/css/thumbs";
$bg: #F2F2F2;
$color1: #808080;
$color2: #F3994F;
$color3: #555555;

section {
    overflow: hidden;
    background-color: $bg;
    padding: 140px 0;
    .wrapper {
        position: relative;
    }
}
.mainProduct {
    @media screen and (min-width: 992px) {
        padding-left: 11.875vw;
    }
    .product {
        .cover {
            margin: 0 5.20834vw;
        }
    }
}
.product {
    .name {
        width: 9.375vw;
        width: 180px;
        text-align: center;
        .zh {
            font-size: 36px;
            font-size: clamp(28px, 1.875vw, 36px);
            font-weight: 900;
            color: $color1;
        }
        .en {
            font-size: 32px;
            font-size: clamp(26px, 1.67vw, 32px);
            font-weight: 500;
            color: $color2;
            text-transform: uppercase;
        }
    }
    .cover {
        width: 18.34vw;
        &::before {
            padding-top: 153.125%;
        }
    }
    .intro {
        width: 22.1875vw;
        padding-left: 2.0834vw;
        border-left: 8px solid $color2;
        p {
            color: $color3;
            font-size: 20px;
            font-size: clamp(16px, 1.04167vw, 20px);
        }
    }
}
.settingsList {
    height: 300px;
    width: 144%;
    overflow: hidden;
    position: absolute;
    z-index: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -5%);
    .product {
        width: 9.47917vw;
    }
    .cover {
        height: 100%;
        max-height: 300px;
        img {
            -webkit-filter: blur(5px);
            filter: blur(5px);
            object-fit: contain;
        }
    }
}
</style>