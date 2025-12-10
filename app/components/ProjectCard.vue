<script setup lang="ts">
import type { PropType } from 'vue';
import type { Projects } from '../../server/types/Projects'

defineProps({
  project: {
    type: Object as PropType<Projects>,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-gray-900 block max-w-sm p-6  rounded-lg shadow-xs"
  >
    <NuxtLink :to="`projects/${project.slug}`">
      <img class="rounded-sm object-cover h-fit w-full" :src="project.thumbnail.url" :alt="project.title" />
    </NuxtLink>

    <div class="flex gap-2 items-center mt-4" >
      <div v-for="tag in project.tags" :key="tag">
        <span
          
          class="bg-indigo-950 text-blue-300 text-xs font-medium px-1.5 py-0.5 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <NuxtLink :to="`projects/${project.slug}`">
      <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-white!">
        {{ project.title }}
      </h5>
    </NuxtLink>
    
    <p class="mb-6 text-body line-clamp-2 min-h-12 text-white!">
      {{ project.description }}
    </p>
  </div>
</template>