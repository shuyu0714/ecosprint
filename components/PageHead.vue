<template>
    <div>
        <h2>{{ title }}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>
$head-color: #808080;

h2 {
    color: $head-color;
    display: flex;
    align-items: baseline;
    font-size: 48px;
    font-size: clamp(32px, 2.5vw, 48px);
    font-weight: 500;
    @media screen and (max-width: 767px) {
        font-size: 24px;
        justify-content: center;
        width: 100%;
    }
    &::before,
    &::after {
        content: '';
        display: flex;
        width: 20.05208vw;
        height: 2px;
        background-color: $head-color;
        @media screen and (max-width: 767px) {
            flex-grow: 1;
            height: 1px;
        }
    }
    &::before {
        margin-right: 15px;
    }
    &::after {
        margin-left: 15px;
        @media screen and (min-width: 768px) {
            display: none;
        }
    }
}
</style>