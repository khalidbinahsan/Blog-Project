<script setup>
import Sidebar from './components/Sidebar.vue';

</script>

<template>
<header class="p-5 bg-black w-full border-b-2 border-white z-10 md:fixed md:pl-3">
    <h2 class="text-white text-2xl">A Wonderful Blog</h2>
</header>
<section>
    <aside class="bg-black md:h-screen md:fixed md:w-40 md:pt-20">
        <ul class="text-white p-4 flex md:flex-col">
            <Sidebar/>
        </ul>
    </aside>
    <div class="p-5 md:ml-40 pt-4 md:pt-20 md:flex">
        <router-view></router-view>
        <router-view name="sidebar"></router-view>
    </div>
</section>
</template>

<style scoped>

</style>
