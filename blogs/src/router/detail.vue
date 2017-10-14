<template>
   <div class='p'>
       <p>文章标题：<label for="">{{article}}</label></p>
       <p>作者：<label for="">{{editer}}</label></p>
       <p>天气：<label for="">{{daodu}}</label></p>
       <p>时间：<label for="">{{time}}</label></p>
       <p>内容：<label for="">{{content}}</label></p>
   </div>
</template>
<script>
    export default {
        data() {
            return {
                data: '',
                article: '',
                editer: '',
                daodu: '',
                time: '',
                content: ''
            }
        },
        created() {
            const _this = this;
            this.axios.get('/api/front_article/getArticleAll').then((data) => {
                for (var i in data.data.data) {
                    if (data.data.data[i].id == _this.$route.query.data) {
                        _this.article = data.data.data[i].article_name;
                        _this.editer = data.data.data[i].editer;
                        _this.daodu = data.data.data[i].daodu;
                        _this.time = data.data.data[i].time;
                        _this.content = data.data.data[i].content;
                    }
                }

            })
        },
        watch: {
            $route() {
                const _this = this;
                console.log(123456)
                this.axios.get('/api/front_article/getArticleAll').then((data) => {
                    for (var i in data.data.data) {
                        if (data.data.data[i].id == _this.$route.query.data) {
                            _this.article = data.data.data[i].article_name;
                            _this.editer = data.data.data[i].editer;
                            _this.daodu = data.data.data[i].daodu;
                            _this.time = data.data.data[i].time;
                            _this.content = data.data.data[i].content;
                        }
                    }

                })
            }
        }
    }
</script>
<style>
    .p p {
        display: flex;
        width: 100%;
        height: 30px;
    }
    
    .p p label {
        color: #fff;
    }
</style>