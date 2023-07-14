---
layout: page
sidebar: false
title: 文章列表
---
<link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
<div class="wrapper">
    <div class="left_part">
        <img class="site_logo" src="/assets/logo.png" alt="logo.png"/>
        <a href="/" class="site_title">
            <span class="site_name">DreaMaigc</span>
        </a>
        <div class="site_desc">
            <div>Magical realm, AI's enchantment dwells.</div>
            <div>Amidst wonders, Blockchina's spells compel.</div>
            <div>In CyberSecurity's realm, secrets thrive.</div>
            <div>Glimpses of knowledge, our blog derives.</div>
            <div>Crafting fusion, dreams and wisdom entwine.</div>
        </div>
    </div>
    <div class="right_part">
        <ul class="post_list">
            <li v-for="post in pagerData.data">
                <PostItem 
                    :post_url="post.url"
                    :tag="post.tag"
                    :title="post.title"
                    :description="post.description"
                    :create_date="post.create_date"
                />
            </li>
        </ul>
        <div class="pager_container">
            <el-pagination background 
                        layout="prev, pager, next" 
                        prev-text="上一页" next-text="下一页" hide-on-single-page=true
                        @current-change="currentChange" :current-page="pagerData.page"
                        :page-size="pagerData.pageSize" default-current-page="1"
                        :total="posts.length" />
        </div>
    </div>
    <div class="block_for_blank"></div>
</div>


<script setup>
import PostItem from '/components/PostItem.vue'
import { data as posts } from '/dataloader/posts.data'
import { ElPagination } from 'element-plus'
import { reactive, onMounted } from 'vue'
const pageSize = 10
let pagerData = reactive({
    page: 1,
    data: []
})
function getDataForCurrentPage(){
    return posts.slice(
        (pagerData.page - 1) * pageSize,
        pagerData.page * pageSize
    )
}
function currentChange(val) {
    pagerData.page = val
    pagerData.data = getDataForCurrentPage()
}
function removeFooter() {
    var footer = document.querySelector("footer")
    if(footer) {
        footer.parentNode.removeChild(footer)
    }
}
onMounted(() => {
    currentChange(1)
    removeFooter()
})
</script>

<style scope>
.wrapper {
    display: flex;
    height: calc(100vh - 64px);
}
.left_part {
    background-color: var(--vp-sidebar-bg-color);
    width: 20%;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.site_title {
    flex-direction: column;
    display: flex;
    align-content: center;
}
.site_logo {
    width: 30%;
}
.site_name {
    font-size: 20px;
    font-weight: bold;
}
.site_desc {
    font-size: 10px;
    text-align: center;
}

.right_part {
    flex: 1;
    height: calc(100vh - 64px);
    overflow: auto;
}
.post_list {
    width: 90%;
    margin: 30px;
}

.pager_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}


</style>
