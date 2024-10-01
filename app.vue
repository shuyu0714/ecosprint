<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

useHead({
  title: route.meta.title,
  titleTemplate: (title) => (title ? `${title} | 專案名稱` : '專案名稱'),
})
useSeoMeta({
  description: '專案簡介',
  ogTitle: '專案名稱',
  ogDescription: '專案簡介',
  ogUrl: config.public.baseURL,
  ogImage: `${config.public.baseURL}`,
  twitterTitle: '專案名稱',
  twitterDescription: '專案簡介',
  twitterImage: `${config.public.baseURL}`,
  twitterCard: '專案簡介'
})
</script>
