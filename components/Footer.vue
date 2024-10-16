<template>
    <footer>
        <div class="wrapper d-grid justify-content-between">
            <div class="brand d-flex justify-content-between align-items-center">
                <NuxtImg class="logo img-fluid" src="/icon/logo-ecosprint-h.svg" alt="EcoSprint 奔奔 Logo" />
                <div class="company">
                    <div>綠尾有限公司</div>
                    <div>
                        <div>統一編號 | 96807616</div>
                        <div>地址 | 新北市新店區安興路45巷2號</div>
                        <div>電話 | 02-77287761</div>
                        <div>聯絡信箱 | service@greentailpet.com</div>
                    </div>

                </div>
            </div>
            <div class="info"></div>
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
        grid-template-columns: 37.2755% 22.7864%;
    }
}
.brand {
    .logo {
        width: 24.605%;
    }
}
</style>