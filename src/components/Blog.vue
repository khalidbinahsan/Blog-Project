<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const catname = computed(()=>{
    return route.params.name
})
</script>

<template>
    <div>
        <h2 class="text-xl font-bold">{{ catname }}</h2>
    <h1 class="text-4xl mb-6 font-bold">Blog</h1>
    <article class="mb-8">
        <img class="max-w-80"
            src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <a href="#">
            <h2 class="text-xl font-bold mt-3">Hello World Post</h2>
        </a>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam debitis quibusdam enim ipsa dicta omnis
            vel voluptatibus ipsum, dolorem et ducimus totam. Necessitatibus, obcaecati! Doloremque fuga quas rem
            provident officia?</p>
        <button class="mt-3 text-red-800">Ream more</button>
    </article>
    <article>
        <img class="max-w-80"
            src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <a href="#">
            <h2 class="text-xl font-bold mt-3">Hello World Post</h2>
        </a>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam debitis quibusdam enim ipsa dicta omnis
            vel voluptatibus ipsum, dolorem et ducimus totam. Necessitatibus, obcaecati! Doloremque fuga quas rem
            provident officia?</p>
        <button class="mt-3 text-red-800">Ream more</button>
    </article>
</div>
</template>

<style scoped></style>