<template>
    <footer>
        <div class="wrapper d-grid justify-content-md-between">
            <div class="brand d-flex justify-content-md-between align-items-center">
                <NuxtImg class="logo img-fluid" src="/icon/logo-ecosprint-h.svg" alt="EcoSprint 奔奔 Logo" />
                <div class="company">
                    <h2 class="name mb-md-4 mb-2">綠尾有限公司</h2>
                    <div class="info">
                        <div>統一編號 | 96807616</div>
                        <div>地址 | 新北市新店區安興路45巷2號</div>
                        <div>電話 | <NuxtLink to="tel:+02-77287761">02-77287761</NuxtLink></div>
                        <div>聯絡信箱 | <NuxtLink to="mailto:service@greentailpet.com">service@greentailpet.com</NuxtLink></div>
                    </div>
                </div>
            </div>
            <div class="info d-flex flex-column justify-content-md-between">
                <div class="social d-inline-flex justify-content-md-end">
                    <div class="item">
                        <nuxt-link class="d-block" to="https://www.facebook.com/ecosprint2024" target="_blank" rel="noopener noreferrer">
                            <NuxtImg class="img-fluid" src="/icon/icon-fb.svg" alt="facebook icon link" />
                        </nuxt-link>
                    </div>
                    <div class="item">
                        <nuxt-link class="d-block" to="https://www.instagram.com/ecosprintpet" target="_blank" rel="noopener noreferrer">
                            <NuxtImg class="img-fluid" src="/icon/icon-ig.svg" alt="instagram icon link" />
                        </nuxt-link>
                    </div>
                    <div class="item">
                        <nuxt-link class="d-block" to="" target="_blank" rel="noopener noreferrer">
                            <NuxtImg class="img-fluid" src="/icon/icon-line.svg" alt="line icon link" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="copyright text-center text-md-end">Copyright © 2024 eco sprint. All rights reserved.</div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: var(--bs-primary);
    color: var(--bs-white);
    padding: 3.64583vw;
    .wrapper {
        width: 84.11458%;
        margin: auto;
        grid-template-columns: max-content auto;
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
        }
        a { 
            color: var(--bs-white);
            text-decoration: none;
        }
    }
}
.brand {
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
    .logo {
        width: clamp(55px, 7.08333vw, 136px);
        margin-right: 22px;
    }
    .company {
        .name {
            font-size: clamp(18px, 1.6667vw, 32px);
            &::after {
                content: '';
                display: block;
                width: 1.875vw;
                height: 4px;
                background-color: var(--bs-white);
                margin-top: 8px;
                @media screen and (max-width: 767px) {
                    width: 16px;
                }
            }
            @media screen and (max-width: 767px) {
                font-size: 20px ;
            }
        }
        .info {
            font-size: clamp(15px, 1.04167vw, 20px);
            
        }
    }
}
.info {
    @media screen and (max-width: 767px) {
        align-items: center;
        margin-top: 30px;
    }
    .social {
        gap: 0 1.6667vw;
        // border-bottom: 2px solid var(--bs-white);
        position: relative;
        padding-bottom: 1.6667vw;
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--bs-white);
            position: absolute;
            bottom: 0;
            width: 13.3vw;
            @media screen and (max-width: 767px) {
                width: 100%;
            }
        }
        .item {
            width: 3.333vw;
            @media screen and (max-width: 767px) {
                width: 32px;
            }
        }
        @media screen and (max-width: 767px) {
            gap: 0 16px;
            padding-bottom: 16px;
            margin-bottom: 16px;
        }
    }
    .copyright {
        font-size: clamp(12px, .8333vw, 16px);
    }
}
</style> 