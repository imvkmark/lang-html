<template>
    <div class="align--index">
        <h5>垂直居中</h5>
        <AlignVCenter/>
        <h5>横线居中</h5>
        <DashMiddle/>
    </div>
</template>

<script>
import AlignVCenter from "./v_center.vue";
import DashMiddle from "./dash-middle.vue";

export default {
    components : {AlignVCenter, DashMiddle},
    name : "Align"
};
</script>