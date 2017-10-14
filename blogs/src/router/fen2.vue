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
        data(){
            return {
                tableData:[],
                listdata:''
            }
        },
        created(){
            const array=[];
            this.axios.get('/api/front_article/getNav').then((data)=>{
                for(var i in data.data.data){
                     for(var k in data.data.data[i].twodata){ 
                         array.push( data.data.data[i].twodata[k]);
                         this.tableData=array;
                     }    
                } 
            });
        },
        watch:{
            $route(){
                var data=this.$route.query.data;
                this.listdata=data; 
            }
        }
    }
</script>
<style>
  .table{
      width:600px;
      margin-top:20px;
      margin-left:20px;
  }
</style>