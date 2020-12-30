<template>
    <ul>
        <li>
            <router-link :to="{ name: 'align'}">Align</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'form'}">Form</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name : 'Side'
};
</script>