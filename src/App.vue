<template>
    <div id="app" class="container">
        <router-view/>
    </div>
</template>

<script>
export default {
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
