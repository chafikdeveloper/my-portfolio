<script setup lang="ts">
definePageMeta({
  name: "about",
});

useHead({
  title: "Chafik Chegma | About",
});
</script>

<template>
  <section
    class="flex flex-col items-center md:items-start space-y-3 px-6 py-3 lg:p-6 mx-auto max-w-7xl mt-8 lg:mt-16"
  >
    <div class="md:w-2/3">
      <h2 class="text-3xl font-bold mb-4">About Me</h2>
      <p class="text-lg text-black dark:text-white font-medium">
        Chafik Chegma, Algerian full-stack developer. Graduated in 2024 in
        "Master's Radio Mobile Network". Start coding since 2022 with interest
        in web developement transforming problems to solutions. I've worked with
        many technologies using <span class="framework">Javascript</span>,
        <span class="framework">Typescript</span> and
        <span class="framework">php</span>, familiar with popular frameworks out
        there like: <span class="framework">Vue.js, Nuxt.js, Astro.js</span> for
        the frontend and
        <span class="framework">Laravel and Express.js</span> for the backend
        along with SQL databases:
        <span class="framework">MySQL, PostgreSQL</span>
      </p>
    </div>
  </section>

  <section
    class="flex flex-col items-center md:items-start space-y-3 px-6 py-3 lg:p-6 mx-auto max-w-7xl mt-8"
  >
    <div class="md:w-2/3">
      <h2 class="text-3xl font-bold mb-4">My Journey</h2>

      <ol class="relative border-s border-gray-700">
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-emerald-600 rounded-full mt-1.5 -start-1.5"
          ></div>
          <time
            class="text-sm font-normal leading-none text-black dark:text-white"
            >27th, April - 30th, October 2025</time
          >
          <h3 class="text-lg font-semibold text-heading my-2">
            Full-Stack Developer Internship
          </h3>
          <p
            class="mb-4 text-base font-normal text-body text-black dark:text-white"
          >
            6 month Internship at TiniTec
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-emerald-600 rounded-full mt-1.5 -start-1.5"
          ></div>
          <time
            class="text-sm font-normal leading-none text-black dark:text-white"
            >September 2022 - June 2024</time
          >
          <h3 class="text-lg font-semibold text-heading my-2">
            Master's Radio Mobile Network
          </h3>
          <p
            class="mb-4 text-base font-normal text-body text-black dark:text-white"
          >
            Obtained my Master's Degree in Radio Mobile Network from Sciences
            and Technology University Houari Boumediene
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-emerald-600 rounded-full mt-1.5 -start-1.5"
          ></div>
          <time
            class="text-sm font-normal leading-none text-black dark:text-white"
            >October 2019 - July 2022</time
          >
          <h3 class="text-lg font-semibold text-heading my-2">
            Bachelor's Telecommunication
          </h3>
          <p
            class="mb-4 text-base font-normal text-body text-black dark:text-white"
          >
            Obtained my BAchelor's Degree in Telecommunication from Sciences and
            Technology University Houari Boumediene
          </p>
        </li>
      </ol>
    </div>
    <div class="mt-8">
      <button
        class="px-4 py-2 rounded-md bg-emerald-600 dark:bg-emerald-800 text-emerald-200 dark:text-emerald-400 font-bold cursor-pointer"
      >
        <NuxtLink to="/my_cv.pdf" target="_blank"
          >Download my Resume (CV)</NuxtLink
        >
      </button>
    </div>
  </section>
</template>
