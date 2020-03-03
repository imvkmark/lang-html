<template>
    <div id="app">
        <img src="https://jdc.jd.com/img/150" alt="" class="img-circle-150">
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
