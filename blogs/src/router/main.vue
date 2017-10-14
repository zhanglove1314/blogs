<template>
  <div class='box'>
      <top></top>
      <sec></sec>
  </div>
</template>
<script>
import top from './header.vue'
import sec from './section.vue'
    export default {
        components: {
            top:top,
            sec:sec
        }
    }
</script>
<style>
    .box{
        width:100%;
        height:100%;
        background:url(../../images/1195431.jpg);
        background-size:100% 100%;
    }
</style>