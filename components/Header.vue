<template>
    <header>
        <nav class="navbar">
            <div class="d-flex flex-column flex-md-row align-items-center">
                <NuxtLink class="navbar-brand" to="/">
                    <NuxtImg src="/icon/logo-ecosprint.svg" width="120" height="48" alt="EcoSprint 奔奔 Logo" />
                </NuxtLink>
                <div class="navbar-collapse">
                    <ul class="navbar-nav d-flex align-items-center list-unstyled mb-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="#">關於奔奔</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#">果肉泥餐包</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#">檢驗報告</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#">食材溯源</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--bs-primary);
    color: var(--bs-white);
}
.navbar {
    padding: 12px calc(80px - 3.33334vw) 12px 32px;
    @media screen and (max-width: 767px) {
        padding: 12px 4px;
    }
    &-brand {
        @media screen and (max-width: 767px) {
            margin-bottom: 14px;
        }
        img {
            height: auto;
            @media screen and (max-width: 767px) {
                width: 100px;
                height: auto;
            }
        }
    }
    > .d-flex {
        justify-content: space-between;
        li {
            a {
                font-size: 16px;
                padding: 0 max(28px, 3.33334vw);
                
                @media screen and (max-width: 767px) {
                    font-size: 14px;
                    padding: 0 14px;
                }
            }
        }
        .slash {
            @media screen and (max-width: 767px) {
                width: 5px;
                height: 13px;
            }
        }
    }
}
</style>