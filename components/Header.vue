<template>
    <header>
        <nav class="navbar">
            <div class="d-flex flex-column flex-md-row align-items-center">
                <NuxtLink class="navbar-brand mb-md-0 mb-2" to="/">
                    <NuxtImg src="/icon/logo-ecosprint.svg" width="240" height="96" alt="EcoSprint 奔奔 Logo" />
                </NuxtLink>
                <div class="navbar-collapse">
                    <ul class="navbar-nav d-flex align-items-center list-unstyled mb-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="#">關於奔奔</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="14" height="38" alt="" />
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#">果肉泥餐包</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="14" height="38" alt="" />
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#">檢驗報告</NuxtLink>
                        </li>
                        <NuxtImg src="/icon/icon-slash.svg" class="slash" width="14" height="38" alt="" />
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
    padding: 24px 40px;
    @media screen and (max-width: 767px) {
        padding: 12px 4px;
    }
    &-brand {
        img {
            width: max(120px, 12.5vw);
            height: auto;
            @media screen and (max-width: 767px) {
                width: clamp(80px, 21.333vw, 120px);
                height: auto;
            }
        }
    }
    > .d-flex {
        justify-content: space-between;
        li {
            a {
                font-size: 32px;
                padding: 0 45px;
                // font-size: max(18px, 1.6667vw);
                padding: 0 max(28px, 4.47917vw);
                
                @media screen and (max-width: 767px) {
                    font-size: clamp(12px, 3.2vw, 16px);
                    padding: 0 16px 0 20px;
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