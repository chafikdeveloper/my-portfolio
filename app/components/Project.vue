<script setup lang="ts">
import type { Projects } from '~~/server/types/Projects';

const props = defineProps({
  limit: {
    type: Number,
    required: false,
  },
});

const { data: projects, pending } = await useFetch<Projects[]>("/api/projects", {
  query: {
    limit: props.limit,
  },
  server: false
});
</script>

<template>
  <div v-if="pending" class="flex justify-center lg:mt-32">
    <div class="flex flex-row gap-2">
      <div
        class="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.7s]"
      ></div>
      <div
        class="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.3s]"
      ></div>
      <div
        class="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.7s]"
      ></div>
    </div>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="project in projects" :key="project.slug">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>
