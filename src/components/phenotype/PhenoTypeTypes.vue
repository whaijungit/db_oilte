<template>
    <div class="phenotype-types">
        <div class="type-cell">
            <div class="type-label">生长特性</div>
            <div class="type-items">
                <label class="type-item" for="checkbox">
                    <input id='checkbox' type="checkbox" />
                    <span>新梢长</span>
                </label>
                <label class="type-item" for="checkbox1">
                    <input id='checkbox1' type="checkbox" />
                    <span>新梢长</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import phenotype_examples from '../../../mock/phenotype_exmaples.json'
    console.log(phenotype_examples)
</script>

<style scoped lang="less">
    .phenotype-types {
        .type-cell {
            gap: 20px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .type-label {
                font-size: 14px;
                color: #67717D;
                font-weight: 600;
            }

            .type-items {
                gap: 8px;
                display: flex;

                .type-item {
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                }

            }
        }
    }
</style>