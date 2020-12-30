<template>
    <div class="align--index">
        <h5>自定义单选框/多选框</h5>
        <a href="https://github.com/imvkmark/lang-html/blob/master/src/form/custom_checkbox.vue">github</a>
        <CustomCheckbox/>

    </div>
</template>

<script>
import CustomCheckbox from './custom_checkbox.vue';

export default {
    components : {
        CustomCheckbox
    },
    name : "Form"
};
</script>