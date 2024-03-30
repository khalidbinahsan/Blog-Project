<script setup>

</script>

<template>
    <ul class="text-white flex md:flex-col">
        <li class="p-2">
            <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="p-2">
            <router-link :to="{name: 'about'}">About</router-link>
        </li>
        <li class="p-2">
            <router-link :to="{name: 'blog'}">Blog</router-link>
        </li>
        <li class="p-2">
            <router-link :to="{name: 'contact'}">Contact</router-link>
        </li>
    </ul>
</template>

<style scoped></style>