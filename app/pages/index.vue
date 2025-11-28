<script setup lang="ts">
definePageMeta({
  name: "home",
});

useHead({
  title: "Chafik Chegma | Home",
});
</script>

<template>
  <Hero />

  <section class="mx-auto max-w-7xl lg:mt-32">
    <LogoSlide />
  </section>

  <section class="mx-auto max-w-7xl lg:mt-24 my-8 px-6">
    <div class="flex flex-col items-center space-y-1 mt-4 mb-8">
      <h3 class="text-center text-xl font-bold">My Projects</h3>
      <h4 class="text-center text-md font-light">View my latest projects</h4>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard :limit="3" />
    </div>

    <div class="flex justify-center mt-8">
      <NuxtLink :to="{ name: 'projects' }">
        <button
          class="flex gap-2 items-center px-4 py-2 rounded-full text-emerald-500 font-bold cursor-pointer"
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </button>
      </NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-7xl lg:mt-24 my-8 px-6">
    <div class="flex flex-col items-center space-y-1 mt-4 mb-8">
      <h3 class="text-center text-xl font-bold">Testimonials</h3>
      <h4 class="text-center text-md font-light">What people says about me</h4>
    </div>

    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <Testimonial />
    </div>
  </section>
</template>
