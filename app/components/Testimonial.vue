<script setup>
const testimonials = await $fetch('/api/testimonials');
</script>

<template>
  
    <article v-for="item in testimonials" :key="item.id"
      class="break-inside-avoid flex flex-col p-4 border-2 rounded-md shadow-md bg-gray-900"
    >
      <div>
        <h3 class="font-bold text-lg text-white!">{{item.name}}</h3>
        <p class="font-medium text-sm text-emerald-500">{{item.role}}</p>
      </div>
      <div class="mt-4">
        <p class="text-md font-medium text-gray-300">
          {{item.message}}
        </p>
      </div>
    </article>
</template>
