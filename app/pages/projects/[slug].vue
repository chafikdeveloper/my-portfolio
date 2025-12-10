<script setup lang="ts">
import type { Project } from "~~/server/types/Project";

const { slug } = useRoute().params;

const { data: project, pending } = await useFetch<Project>("/api/project", {
  query: {
    slug,
  },
  server: false,
});

useHead({
  title: `Project - ${project.value?.title}`,
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
  <article v-else class="p-4 mx-auto max-w-7xl lg:my-16">
    <h1 class="font-bold text-3xl">{{ project?.title }}</h1>
    <div class="my-4 text-black dark:text-white font-bold">
      <hr />
    </div>
    <div
      v-html="project?.content.html"
      class="flex flex-col min-w-full prose prose-p:text-gray-400 prose-li:text-gray-400 mt-16"
    ></div>
  </article>
</template>
