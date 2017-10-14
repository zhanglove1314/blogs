<template>
   <div class='sec'>
   <div class='right'>
       <router-view></router-view>
   </div>
   <div class='left'>
        <h3>全站搜索</h3>
        <p class='p'><input type="text" placeholder='请输入搜索内容'><button>搜索</button></p>
        <h3>最新文章</h3>
        <ol v-for='obj in listdata'>
        <li><router-link :to="{path:'/detail',query:{data:obj.id}}">{{obj.article_name}}</router-link></li>
        </ol>
   </div>
   </div>
</template>
<script>
     export default {
         data(){
             return {
                 listdata:''
             }
         },
         created(){
             this.axios.get('/api/front_article/getArticleAll').then((data)=>{
                 console.log(data.data.data)
                 this.listdata=data.data.data
             })
         }
     }
</script>
<style>
.sec{
    display:flex;
    margin-top:20px;
   
}
    .right{
        width:800px;
        background:pink;
    }
    .left{
        background:blue;
        width:250px;
        margin-left:30px;
        border-radius:6px;
    }
    h3{
        width:100%;
        text-align:center;
        line-height:30px;
        background:skyblue;
        margin-top:6px;
    }
    .p{
        width:100%;
        height:35px;
        line-height:35px;

    }
    .p input{
        width:70%;
        height:21px;
        outline:none;
        
    }
    .p button{
        width:50px;
        height:25px;
        margin-left:10px;
        background:skyblue;
        outline:none;
        border:none;
    }
    ol li{
        line-height:25px;
        padding-left:10px;
        box-sizing:border-box;
        color:#fff;
        list-style-type:decimal
    }
</style>