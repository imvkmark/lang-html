import Vue from "vue";
import App from "./App.vue";
import "./assets/style.less";

Vue.config.productionTip = false;

new Vue({
    // el: "#app",
    render: h => h(App)
}).$mount("#app");
