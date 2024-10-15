<template>
    <section>
        <div class="wrapper">
            <div class="ingredient-list d-grid">
                <div class="ingredient-item" v-for="ingredient in ingredients" :key="ingredient">
                    <div class="ratio ratio-1x1">
                        <NuxtImg :src="ingredients.image" />
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
        { image: 'img-ingredient1.svg', name: '紅龍果', des: '火龍果富含膳食纖維及甜菜紅素，促進腸道保健' },
        { image: 'img-ingredient2.svg', name: '無毒蜂子', des: '蜂子具豐富胺基酸及牛磺酸，維持免疫力' },
        { image: 'img-ingredient3.svg', name: '紫山藥', des: '豐富維生素、花青素及膳食纖維，取代膠類幫助餐包成形' },
    ])
</script>

<style lang="scss" scoped>
$bg: #B7BBAF;
$bg2: #F8F7E9;
section {
    background-color: $bg;
    padding: 100px 0;
    .wrapper {
        width: 76.875%;
        margin: auto;
    }
}
.ingredient-list {
    grid-template-columns: repeat(4, 20.3252%);
}
.ingredient-item {
    background-color: $bg2;
    padding: 45px 28px 20px;
    border-top-left-radius: 160px;
    border-top-right-radius: 160px;
    h3 {
        font-size: 24px;
        color: #666;
    }
    p {
        font-size: 20px;
        color: #555;
    }
}
</style>