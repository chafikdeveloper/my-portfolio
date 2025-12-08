<script setup lang="ts">
import type { Project } from '~~/server/types/Project';

const props = defineProps({
  limit: {
    type: Number,
    required: false,
  },
});

const { data: projects } = await useFetch<Project[]>("/api/projects", {
  query: {
    limit: props.limit,
  },
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="project in projects" :key="project.slug">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>
