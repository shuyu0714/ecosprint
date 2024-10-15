<template>
    <div class="carousel w-100">
        <VSlickCarousel v-bind="settings">
            <div>
                <NuxtImg src="/img/banner/img-banner1.jpeg" class="img-fluid d-none d-md-block" densities="x1" alt="EcoSprint 奔奔 Logo" />
                <NuxtImg src="/img/banner/img-banner1_mb.jpeg" class="img-fluid d-md-none" densities="x1" alt="EcoSprint 奔奔 Logo" />
            </div>
        </VSlickCarousel>
    </div>
</template>

<script setup>
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'

const settings = {
  slidesToShow: 1,
  arrows: false,
  draggable: false,
}
</script>