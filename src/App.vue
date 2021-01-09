<template>
    <div id="app" class="container">
        <side/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Side from './component/side.vue';

export default {
    components : {
        Side
    },
    name : 'App'
};
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background-color: #FFF;
}
</style>
