<template>
<div class='table'>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="article_name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="editer"
        label="作者"
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
        data(){
            return {
                tableData:[]
            }
        },
        created(){
            const array=[];
            this.axios.get('/api/back_article/getArticle').then((data)=>{
                this.tableData=data.data.data;
                console.log(data.data.data) 
            })
        }
    }
</script>
<style>
  .table{
      width:600px;
  }
</style>