<script setup lang="ts">
interface Project {
  id: number,
  title: string,
  slug: string,
  description: string,
  tags: string[],
  link: string,
  cover: string
};

const projects = await $fetch('/api/projects');

const props = defineProps({
  limit: Number
})

let data = <Project[]>[];

if (props.limit) {
  data = projects.slice(0, props.limit);
} else {
  data = projects;
}

</script>

<template>
  <div v-for="item in data" :key="item.id"
    class="bg-gray-900 block max-w-sm p-6  rounded-lg shadow-xs"
  >
    <NuxtLink>
      <img class="rounded-sm object-cover h-fit w-full" :src="item.cover" :alt="item.title" />
    </NuxtLink>

    <div class="flex gap-2 items-center mt-4">
      <dev>
        <span
          v-for="tag in item.tags" :key="tag"
          class="bg-indigo-950 text-blue-300 text-xs font-medium px-1.5 py-0.5 rounded-full"
        >
          {{ tag }}
        </span>
      </dev>
    </div>

    <NuxtLink>
      <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-white!">
        {{ item.title }}
      </h5>
    </NuxtLink>
    
    <p class="mb-6 text-body line-clamp-2 text-white!">
      {{ item.description }}
    </p>
  </div>
</template>