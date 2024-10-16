<template>
    <section>
        <PageHead title="食材溯源" />
        <div class="wrapper mt-md-0 mt-4">
            <div class="trace-list d-grid">
                <div class="trace-item d-flex" v-for="trace in traces" :key="trace">
                    <div>
                        <h4 class="mb-0">{{ trace.title }}</h4>
                        <h3 class="mb-2">{{ trace.name }}</h3>
                        <p>{{ trace.des }}</p>
                    </div>
                    <div class="ratio">
                        <NuxtImg :src="`/img/5_trace/${trace.image}`" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const traces = ref([
        { image: 'img-trace1.png', title:'產銷履歷', name: '嘉南虱目魚精', des: '使用陶甕不加一滴水熬煮10小時，絕對不添加任何人工添加物， 嚴選足齡嘉南虱目魚，遵循古法煉製的天然滴魚精。' },
        { image: 'img-trace2.png', title:'產銷履歷', name: '紅羽土雞滴雞精', des: '使用陶甕不加一滴水熬煮10小時，絕對不添加任何人工添加物， 嚴選足齡壯年之紅羽土雞，遵循古法煉製的天然滴雞精。' },
        { image: 'img-trace3.png', title:'草生栽培', name: '產銷履歷紅龍果', des: '嚴選來自彰化縣福興鄉妞妞果園的紅龍果，自製益生菌噴灌，採用有機質活化土壤，友善環境、草生栽培。' },
    ])
</script>

<style lang="scss" scoped>
$bg1: #EBEDDF;
$bg2: #F2F2F2;
$head-color: #808080;
section {
    padding: 3.90625vw 0 11.90625vw;
    @media screen and (max-width: 767px) {
        padding: 11.4667vw 0 18.8667vw;
    }
    .wrapper {
        width: 86.97916%;
        margin: auto;
        @media screen and (max-width: 767px) {
            width: 90.1333vw;
        }
    }
}
.trace-list {
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 28.3252%);
        gap: 2.916667vw 0;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 11.174vw 7.339vw;
    }
}
.trace-item {
    $total: 3;
    position: relative;
    padding: 2.604167vw 2.86458vw 16.6667vw;
    border-top-right-radius: 60px;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(odd) {
        background-color: $bg1;
    }
    &:nth-child(even) {
        background-color: $bg2;
    }
    @media screen and (min-width: 768px) {
        @for $i from 1 through $total {
            &:nth-child(#{$i}) {
                margin-top: ($total - $i) * 5.36458vw;
            }
        }
    }
    @media screen and (max-width: 767px) {
        flex-direction: row;
        padding: 8vw 20.5333vw 9.6vw 8vw;
        width: 81.0651%;
    }
    .ratio {
        width: calc(100% - 2.86458vw - 2.86458vw);
        position: absolute;
        right: 0;
        bottom: -7vw;
        // margin-left: 2.86458vw;
        &::before {
            padding-top: 123.809%;
        }
        @media screen and (max-width: 767px) {
            width: 40.5325%;
            right: -23%;
        }
    }
    h4 {
        color: $head-color;
        font-weight: 700;
        font-size: 34px;
        font-size: clamp(15px, 1.77083vw, 34px);
        @media screen and (max-width: 767px) {
            font-size: max(14px, 3.7333vw);
        }
    }
    h3 {
        font-size: 42px;
        font-size: clamp(20px, 2.1875vw, 42px);
        font-weight: 700;
        color: $head-color;
        @media screen and (max-width: 767px) {
            font-size: max(17px, 4.5333vw);
        }
    }
    p {
        font-size: 24px;
        font-size: clamp(15px, 1.25vw, 24px);
        margin-bottom: 0;
        color: $head-color;
        @media screen and (max-width: 767px) {
            font-size: clamp(12px, 3.2vw, 16px);
        }
    }
}
</style>