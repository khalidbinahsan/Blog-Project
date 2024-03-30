<script setup>

</script>

<template>
<aside class= "mt-3 p-5 bg-slate-100 md:w-80">
    <h4 class="text-xl font-bold">Category</h4>
    <ul class= "md:flex md:flex-col">
        <li class="p-2 underline">
            <router-link :to="{name: 'category', params:{name: 'travel'}}">Travel</router-link>
        </li>
        <li class="p-2 underline">
            <router-link :to="{name: 'category', params:{name: 'foods'}}">Foods</router-link>
        </li>
        <li class="p-2 underline">
            <router-link :to="{name: 'category', params:{name: 'programming'}}">Programming</router-link>
        </li>
        <li class="p-2 underline">
            <router-link :to="{name: 'category', params:{name: 'lifestyle'}}">Lifestyle</router-link>
        </li>
    </ul>
</aside>
</template>

<style scoped>

</style>