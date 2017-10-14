<template>
    <div>
      <div class='head_one'><p><img src="../../images/1158567.jpg" alt=""></p><span>张伟霞博客</span></div>
       <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2" v-for='(i,index) in listdata' :index='i.onedata.id'>
                <template slot="title">{{i.onedata.cnname}}</template>
<el-menu-item v-for='k in i.twodata' :index='k.id'>
    {{k.cnname}}
</el-menu-item>
</el-submenu>
</el-menu>
<p class='shou'>首页/{{one_name}}{{two_name}}</p>
</div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                listdata: [],
                one_name: '',
                two_name: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                const _this = this;
                for (var obj in this.listdata) {
                    if (keyPath[0] == this.listdata[obj].onedata.id) {
                        this.one_name = this.listdata[obj].onedata.cnname
                        console.log(this.listdata[obj].onedata.cnname)
                        for (var k in this.listdata[obj].twodata) {
                            if (this.listdata[obj].twodata[k].id == keyPath[1]) {
                                _this.two_name = '/' + this.listdata[obj].twodata[k].cnname
                            }

                        }
                    }
                }
                this.$router.push({
                    path: '/fen2',
                    query: {
                        data: key
                    }
                })
            }
        },
        created() {
            this.axios.get('/api/front_article/getNav').then((data) => {
                this.listdata = data.data.data;
            })
        }
    }
</script>
<style>
    p {
        width: 70px;
        height: 70px;
    }
    
    p img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    
    .head_one {
        display: flex;
        align-items: center;
    }
    
    .head_one span {
        display: inline-block;
        color: yellow;
        font-size: 18px;
        margin-left: 20px;
    }
    
    .shou {
        width: 100%;
        height: 20px;
        line-height: 20px;
    }
</style>