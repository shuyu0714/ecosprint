<template>
    <section class="d-flex justify-content-center">
        <NuxtLink class="d-flex justify-content-center" to="/" target="_blank" rel="noopener">
            <NuxtImg class="img-fluid" src="/img/img-report.svg" />
        </NuxtLink>
        <div class="holder"></div>
    </section>
</template>

<style lang="scss" scoped>
$bg: #F2F2F2;
section {
    position: relative;
    padding: 7.604167vw 0 5.15625vw;
    background: no-repeat left top / 100% url(/assets/images/img/bg-report.svg);
    @media screen and (max-width: 767px) {
        padding: 11.2vw 0;
    }
}
img {
    width: 51.04167vw;
    @media screen and (max-width: 767px) {
        width: 96vw;
    }
}
.holder {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    height: 15vw;
    background-color: $bg;
    @media screen and (max-width: 767px) {
        height: 45vw;
    }
}
</style>