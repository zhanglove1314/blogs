<template>
<div class='table'>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cnname"
        label="中文名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="enname"
        label="英文名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
    </el-table>
</div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        created() {
            const array = [];
            this.axios.get('/api/front_article/getNav').then((data) => {
                console.log(data.data.data)
                for (var i in data.data.data) {
                    array.push(data.data.data[i].onedata);
                    this.tableData = array;
                }

            })
        }
    }
</script>
<style>
    .table {
        width: 600px;
    }
</style>

<!-- <el-submenu index="2">
                <template slot="title">文章管理</template>
                <el-menu-item index="2-1"><router-link to='list'>文章列表</router-link></el-menu-item>   
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">分类管理</template>
                <el-menu-item index="2-1"><router-link to='fen1'>一级分类</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to='fen2'>二级分类</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to='fen_list'>分类列表</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">接口管理</template>
                <el-menu-item index="2-1">接口文档</el-menu-item>
                <el-menu-item index="2-2">接口列表</el-menu-item>
            </el-submenu>  -->