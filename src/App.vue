<template>
    <header class='header'>
        <Container>
            <div class="nav-bar">
                <div class='nav-item'>
                    <router-link to="/" class="nav-link-item">
                        <img src="@/assets/img/logo.png" alt="">
                        <h1 class="brand">油茶种质资源数据库</h1>
                    </router-link>
                </div>
                <div class='nav-item'>
                    <RouterLink to="/" :active-class="'active'" class="nav-link-item">首页</RouterLink>
                    <router-link to="/phenotype" :active-class="'active'" class="nav-link-item">表型数据</router-link>
                    <router-link to="/gene" :active-class="'active'" class="nav-link-item">基因数据</router-link>
                    <router-link to="/variant" :active-class="'active'" class="nav-link-item">变异位点</router-link>
                    <router-link to="/blast" :active-class="'active'" class="nav-link-item">BLAST</router-link>
                </div>
            </div>
        </Container>
    </header>
    <router-view />
    <footer class="footer">Copyright©2024 中南林业科技大学&华智生物技术有限公司 All rights reserved. </footer>
</template>

<script setup lang="ts">
    import Container from './components/Container/index.vue'
</script>

<style scoped>
    .header {
        top: 0;
        height: 60px;
        z-index: 9999;
        position: sticky;
        align-items: center;
        background-color: var(--light);
        box-shadow: 0px 8px 24px 0px rgba(24, 29, 40, 0.04), 0px 4px 8px 0px rgba(24, 29, 40, 0.08);

        .container {
            height: 100%;
        }
    }

    .nav-bar {
        height: 100%;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: space-between;

        .nav-item {
            gap: 40px;
            height: 100%;
            display: flex;

            .nav-link-item {
                gap: 20px;
                display: flex;
                color: inherit;
                align-items: center;

                text-decoration: none;

                &.active {
                    font-weight: 600;
                    color: var(--primary);
                }

                .brand {
                    margin: 0px;
                    font-size: 24px;
                    font-weight: 700;
                }
            }
        }
    }

    .footer {
        height: 40px;
        display: flex;
        flex-shrink: 0;
        font-size: 12px;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        padding: 11px 0px 12px 0px;
        background-color: var(--gray-3);
    }
</style>