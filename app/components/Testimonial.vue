<script setup>
const {data: testimonials, pending} = await useFetch("/api/testimonials", {
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
  <article v-else
    v-for="item in testimonials"
    :key="item.id"
    class="break-inside-avoid flex flex-col p-4 border-2 rounded-md shadow-md bg-gray-900"
  >
    <div>
      <h3 class="font-bold text-lg text-white!">{{ item.name }}</h3>
      <p class="font-medium text-sm text-emerald-500">{{ item.role }}</p>
    </div>
    <div class="mt-4">
      <p class="text-md font-medium text-gray-300">
        {{ item.message }}
      </p>
    </div>
  </article>
</template>
