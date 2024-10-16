<template>
    <section>
        <div class="wrapper">
            <div class="ingredient-list d-grid">
                <div class="ingredient-item" v-for="ingredient in ingredients" :key="ingredient">
                    <div class="ratio ratio-1x1">
                        <NuxtImg :src="`/img/4_ingredient/${ingredient.image}`" />
                    </div>
                    <h3 class="text-center mb-1">{{ ingredient.name }}</h3>
                    <p>{{ ingredient.des }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const ingredients = ref([
        { image: 'img-ingredient1.png', name: '紅龍果', des: '火龍果富含膳食纖維及甜菜紅素，促進腸道保健' },
        { image: 'img-ingredient2.png', name: '無毒蜂子', des: '蜂子具豐富胺基酸及牛磺酸，維持免疫力' },
        { image: 'img-ingredient3.png', name: '紫山藥', des: '豐富維生素、花青素及膳食纖維，取代膠類幫助餐包成形' },
        { image: 'img-ingredient4.png', name: '雞肉', des: '國產優質雞肉，高蛋白低脂肪、富含支鏈胺基酸（BCAA）' },
        { image: 'img-ingredient5.png', name: '烏魚', des: '烏魚殼(肉)含有不飽和脂肪酸及維生素B12，有益皮毛健康' },
        { image: 'img-ingredient6.png', name: '水針魚', des: '富含牛磺酸、維生素、礦物質、肉質白細、脆而帶甜味' },
        { image: 'img-ingredient7.png', name: '白帶魚', des: '富含Omega-3、維生素B12、菸鹼酸幫助生長與代謝' },
        { image: 'img-ingredient8.png', name: '虱目魚', des: '富含維生素A、Omaga-3，幫助降低膽固醇、保護心臟' },
    ])
</script>

<style lang="scss" scoped>
$bg: #B7BBAF;
$bg2: #F8F7E9;
section {
    background-color: $bg;
    padding: 100px 0;
    @media screen and (max-width: 768px) {
        padding: 44px 0;
    }
    .wrapper {
        width: 76.875%;
        margin: auto;
        @media screen and (max-width: 768px) {
            width: 87.2%;
        }
    }
}
.ingredient-list {
    grid-template-columns: repeat(4, 20.3252%);
    justify-content: space-between;
    gap: 56px 0;
    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 28.3252%);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 9.174vw 7.339vw;
    }
}
.ingredient-item {
    background-color: $bg2;
    padding: 45px 28px 20px;
    border-top-left-radius: 160px;
    border-top-right-radius: 160px;
    .ratio {
        width: 86.0656%;
        margin: auto;
    }
    h3 {
        font-size: 24px;
        color: #666;
        @media screen and (max-width: 768px) {
            font-size: clamp(12px, 3.2vw, 16px);
        }
    }
    p {
        font-size: 20px;
        margin-bottom: 0;
        color: #555;
        @media screen and (max-width: 768px) {
            font-size: clamp(10px, 2.6667vw, 16px);
        }
    }
}
</style>