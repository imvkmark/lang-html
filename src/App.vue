<template>
    <div id="app" class="container">
        <h4>基本的圆形</h4>
        <img src="http://www.wulicode.com/img/150" alt="" class="img-circle-150">
        <h4>排序</h4>
        <Align/>
    </div>
</template>

<script>
import Align from './align/index.vue'
export default {
    name : 'App',
    components: {Align}
};
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background-color: #ffffff;
}
</style>
