<template>
    <section>
        <div class="wrapper">

            <swiper 
                v-if="thumbsSwiper !== null"
                :loop="true"
                :spaceBetween="10"
                :navigation="false"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="[FreeMode, Navigation, Thumbs]"
                class="mySwiper2"
            >
                <swiper-slide class="product d-flex align-items-start justify-content-center"
                    v-for="product in products" :key="product">
                    <div class="name">
                        <h2 class="zh">{{ product.name }}</h2>
                        <h2 class="en">{{ product.en }}</h2>
                    </div>
                    <div class="cover ratio ratio-1x1">
                        <NuxtImg class="img-fluid" :src="`/img/2_products/img-product-${product.image}.png`" />
                    </div>
                    <div class="intro">
                        <p class="mb-0">{{ product.des }}</p>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="settingsList">
                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :spaceBetween="10"
                    :slidesPerView="4"
                    :watchSlidesProgress="true"
                    :modules="[FreeMode, Navigation, Thumbs]"
                    class="mySwiper"
                >
                    <swiper-slide class="product d-flex align-items-start justify-content-center"
                        v-for="product in products" :key="product">
                        <div class="cover ratio ratio-1x1">
                            <NuxtImg class="img-fluid" :src="`/img/2_products/img-product-${product.image}.png`" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const products = ref([
    { image: '香燉嫩雞', name: '香燉嫩雞', en: 'chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { image: '白帶魚雞肉', name: '白帶魚 & 雞肉', en: 'Hairtail & Chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { image: '極鮮烏魚', name: '極鮮烏魚', en: 'mullet',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { image: '水針虱目魚', name: '水針 & 虱目魚', en: 'Needlefish & Milkfish',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
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
    background-color: $bg;
    padding: 140px 0;
    .wrapper {
        position: relative;
    }
}
.product {
    .name {
        .zh {
            font-size: 40px;
            font-weight: 900;
            color: $color1;
        }
        .en {
            font-size: 35px;
            font-weight: 500;
            color: $color2;
            text-transform: uppercase;
        }
    }
    .cover {
        width: 33.333vw;
        img {
        }
    }
    .intro {
        width: 21.875vw;
        padding-left: 40px;
        border-left: 8px solid $color2;
        p {
            color: $color3;
            font-size: 24px;
        }
    }
}
.settingsList {
    max-height: 300px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
        -webkit-filter: blur(5px);
        filter: blur(5px);
    }
}
</style>