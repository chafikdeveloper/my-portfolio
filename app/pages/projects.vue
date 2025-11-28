<script setup lang='ts'>
definePageMeta({
    name: 'projects'
})

useHead({
    title: 'Chafik Chegma | Projects'
})
</script>

<template>
    <section class="px-6 mx-auto max-w-7xl mt-16 lg:mt-32 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </section>
</template>