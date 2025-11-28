<script setup lang="ts"></script>

<template>
  <div
    class="bg-gray-900 block max-w-sm p-6  rounded-lg shadow-xs"
  >
    <NuxtLink to="">
      <img class="rounded-sm object-cover h-fit w-full" src="/my-image.jpg" alt="project-title" />
    </NuxtLink>

    <div class="flex gap-2 items-center mt-4">
      <dev>
        <span
          class="bg-indigo-950 text-blue-300 text-xs font-medium px-1.5 py-0.5 rounded-full"
        >
          Brand
        </span>
      </dev>
    </div>

    <NuxtLink to="">
      <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-white!">
        Streamlining your design process today.
      </h5>
    </NuxtLink>
    
    <p class="mb-6 text-body line-clamp-2 text-white!">
      In today’s fast-paced digital landscape, fostering seamless collaboration
      among Developers and IT Operations.
    </p>
  </div>
</template>