<template>
    <div class="banner">
        <form @submit="handleSearch">
            <Container>
                <div class="search-bar">
                    <div class="search-item select">
                        <select @change="e => {
                            console.log(e)
                        }" v-model="searchType" placeholder="请选择查询类型">
                            <option value="phenotype">表型数据</option>
                            <option value="gene">基因数据</option>
                            <option value="variant">变异位点</option>
                        </select>
                    </div>
                    <div class="search-item input">
                        <input v-model="searchKeyWord" type="text" placeholder="输入表型维度" />
                    </div>
                    <button type="submit" class="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" />
                            <path d="M16.5 16.5L19 19" stroke="white" stroke-width="2" />
                        </svg>
                        <span>搜索</span>
                    </button>
                </div>
                <div class="searc-iusse">
                    <div class="iusse-label">搜索建议：</div>
                    <div class="iusses">
                        <div class="iusse-item" :key="iuss.character_zh" v-if="searchType === 'phenotype'"
                            @click="searchKeyWord = iuss.character_zh" v-for="iuss in phenotype_exmaples.slice(0, 7)">
                            {{ iuss.character_zh }}
                        </div>
                        <div @click="handleShowAll" v-if="searchType === 'phenotype'" class="iusse-item">
                            <span>全部</span>
                            <svg :style="{ transform: `translate(3px,3px) ${openPhenotype ? 'rotate(180deg)' : 'rotate(0deg)'}` }"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path d="M4 10L8 6L12 10" stroke="#89909E" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

            </Container>
        </form>
        <div :class="`phenotype-popver${openPhenotype ? ' open' : ''}`">
            <PhenoTypeTypes />
        </div>
    </div>

    <Container>
        <div class="record">
            <div class="record-item">
                <img src='@/assets/icons/scource.svg' alt="">
                <div class="record-text">
                    <div class="record-text-value">
                        <span>500</span>
                        <span>份</span>
                    </div>
                    <div class="record-text-title">种质资源</div>
                </div>
            </div>
            <div class="record-item">
                <img src='@/assets/icons/scource.svg' alt="">
                <div class="record-text">
                    <div class="record-text-value">
                        <span>30</span>
                        <span>种</span>
                    </div>
                    <div class="record-text-label">表型维度</div>
                </div>
            </div>
            <div class="record-item">
                <img src='@/assets/icons/scource.svg' alt="">
                <div class="record-text">
                    <div class="record-text-value">
                        <span>6030</span>
                        <span>种</span>
                    </div>
                    <div class="record-text-label">表型记录</div>
                </div>
            </div>
            <div class="record-item">
                <img src='@/assets/icons/scource.svg' alt="">
                <div class="record-text">
                    <div class="record-text-value">
                        <span>281,528,987</span>
                        <span>个</span>
                    </div>
                    <div class="record-text-label">变异位点</div>
                </div>
            </div>
        </div>
        <div class="module">
            <div class="module-item phenotype">
                <img src="@/assets/icons/phenotype.png" alt="">
                <div class="module-item-text">
                    <div class="module-item-text-title">表型数据查询</div>
                    <div class="module-item-text-desc">
                        表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介表型数据查询简介。
                    </div>
                </div>
            </div>
            <div class="module-item gene">
                <img src="@/assets/icons/gene.png" alt="">
                <div class="module-item-text">
                    <div class="module-item-text-title">基因数据查询</div>
                    <div class="module-item-text-desc">
                        基因功能检索模块提供了物种基因信息的查询功能，你可以通过基因ID、基因名称或染色体的位置信息2种方式查询候选基因。通过此功能，你可以迅速获取特定基因的详细信息。</div>
                </div>
            </div>
            <div class="module-item variant">
                <img src="@/assets/icons/variant.png" alt="">
                <div class="module-item-text">
                    <div class="module-item-text-title">变异位点查询</div>
                    <div class="module-item-text-desc">
                        该模块提供全基因组水平SNP（单核苷多态性）信息查询功能，通过染色体的位置信息检索，获取SNP的基因坐标、等位基因频率等信息；也可以通过查看SNP在不同的样本/种群间的基因型，比较其遗传变异的差异。
                    </div>
                </div>
            </div>
            <div class="module-item blast">
                <img src="@/assets/icons/blast.png" alt="">
                <div class="module-item-text">
                    <div class="module-item-text-title">BLAST</div>
                    <div class="module-item-text-desc">
                        BLASTN是一款用于在指定数据库中搜索给定序列相似的序列的工具，通过查找数据库中与查询序列（query）相似的序列来帮助识别基因或者基因组中的特定区域，可以通过它来研究不同物种之间的遗传关系，也可以用来比较同一物种内不同个体的核酸序列以进行遗传多样性的研究。/种群间的基因型，比较其遗传变异的差异。
                    </div>
                </div>
            </div>
        </div>
    </Container>

</template>


<script setup lang="ts">
    import phenotype_exmaples from '../../../mock/phenotype_exmaples.json'
    import { ref } from 'vue'
    import { PhenoTypeTypes } from '@/components/phenotype'
    import Container from '@/components/Container/index.vue'

    const searchType = ref('phenotype')
    const openPhenotype = ref<boolean>(false)
    const searchKeyWord = ref<string | undefined>()

    const handleSearch = (ev: Event) => {
        ev.preventDefault()
        console.log(searchType.value, searchKeyWord.value)
    }

    const handleShowAll = () => {
        openPhenotype.value = !openPhenotype.value
    }

</script>

<style scoped lang="less">
    .banner {
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('@/assets/img/banner.png');

        .phenotype-popver {
            top: 320px;
            left: 50%;
            z-index: 999;
            width: 816px;
            display: none;
            height: 344px;
            padding: 42px 40px;
            position: absolute;
            border-radius: 16px;
            transform: translate(-50%);
            background-color: var(--light);
            box-shadow: 0px 8px 24px 0px rgba(24, 29, 40, 0.04), 0px 4px 8px 0px rgba(24, 29, 40, 0.08);

            &.open {
                display: block;
            }
        }

        .search-bar {
            width: 728px;
            height: 60px;
            display: flex;
            margin: 0 auto;
            border-radius: 8px;
            padding-left: 40px;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
            background-color: var(--light);

            select,
            button,
            input {
                outline: none;
                font-size: 16px;
                font-weight: 400;
                border-color: transparent;

                &::placeholder {
                    color: #B8BDCB;
                }
            }

            .select {
                margin-right: 20px;
                border-right: 1px solid #D6DAE3;
            }

            .input {
                input {
                    width: 100%;
                    padding-right: 20;
                }

                flex-grow: 1;
            }

            .search-btn {
                gap: 6px;
                width: 135px;
                height: 100%;
                display: flex;
                font-size: 16px;
                cursor: pointer;
                font-weight: 500;
                align-items: center;
                color: var(--light);
                justify-content: center;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
                background-color: var(--primary);
            }

        }

        .searc-iusse {
            width: 728px;
            display: flex;
            margin: 0 auto;
            align-items: center;

            .iusse-label {
                font-size: 14px;
                font-weight: 700;
                color: var(--light);
                white-space: nowrap;
            }

            .iusses {
                gap: 8px;
                display: flex;

                .iusse-item {
                    cursor: pointer;
                    padding: 0px 8px;
                    width: fit-content;
                    white-space: nowrap;
                    border-radius: 4px;
                    background-color: rgba(255, 255, 255, 0.8);

                    svg {
                        transition: .1s linear;
                        transform: translateX(3px) translateY(3px);
                    }
                }
            }

        }

    }

    .record {
        display: flex;
        padding: 47px 42px;
        border-radius: 16px;
        border-radius: 16px;
        transform: translateY(-40px);
        box-shadow: 0px 10px 30px 0px rgba(103, 113, 125, 0.12);
        background-color: var(--light);

        .record-item {
            gap: 20px;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .record-text {
                font-size: 16px;

                .record-text-value {
                    font-family: dnd;

                    span {
                        font-size: 30px;
                        font-weight: 700;
                        margin-right: 10px;

                        &:last-child {
                            font-size: 16px;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }

    .module {
        gap: 80px;
        display: flex;
        margin-bottom: 80px;
        flex-direction: column;

        .module-item {
            gap: 80px;
            height: 244px;
            display: flex;
            padding: 42px 100px;
            border-radius: 16px;

            .module-item-text {
                .module-item-text-title {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 20px;
                }

                .module-item-text-desc {
                    line-height: 2;
                    color: #67717D;
                }
            }

            img {
                width: 160px;
                height: 160px;
            }

            &.phenotype {
                background-image: url(@/assets/img/phenotype.png);
            }

            &.gene {
                background-image: url(@/assets/img/gene.png);
            }

            &.variant {
                background-image: url(@/assets/img/variant.png);
            }

            &.blast {
                background-color: var(--gray-3);
            }
        }
    }
</style>