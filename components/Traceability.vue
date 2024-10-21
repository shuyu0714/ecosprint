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
        padding: 43px 0 52px;
    }
    .wrapper {
        width: 86.97916%;
        margin: auto;
        @media screen and (max-width: 767px) {
            width: 90.134vw;
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
    border-top-right-radius: 80px;
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
        border-top-right-radius: 0;
        border-top-left-radius: 36px;
        flex-direction: row;
        padding: 8vw 20.5333vw 9.6vw 7.47vw;
        width: 82.841%;
    }
    .ratio {
        width: calc(100% - 2.86458vw - 2.86458vw);
        position: absolute;
        right: 0;
        bottom: -7vw;
        // margin-left: 2.86458vw;
        &::before {
            padding-top: 123.809%;
            @media screen and (max-width: 767px) {
                padding-top: 120.589%;
            }
        }
        @media screen and (max-width: 767px) {
            width: 48.575%;
            right: -23%;
            // bottom: 50%;
            // transform: translateY(50%);
        }
    }
    h4 {
        color: $head-color;
        font-weight: 700;
        font-size: 28px;
        font-size: clamp(18px, 1.4583vw, 28px);
        line-height: 1.46;
        @media screen and (max-width: 767px) {
            font-size: 18px;
        }
        @media screen and (max-width: 575px) {
            font-size: 14px;
        }
    }
    h3 {
        font-size: 36px;
        font-size: clamp(22px, 1.875vw, 36px);
        font-weight: 700;
        color: $head-color;
        @media screen and (max-width: 767px) {
            font-size: 22px;
        }
        @media screen and (max-width: 575px) {
            font-size: 17px;
        }
    }
    p {
        font-size: 20px;
        font-size: clamp(16px, 1.04167vw, 20px);
        margin-bottom: 0;
        color: $head-color;
        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
        @media screen and (max-width: 575px) {
            font-size: 11px;
        }
    }
}
</style>