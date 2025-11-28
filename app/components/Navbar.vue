<script setup lang="ts">
import { useColorMode } from "#imports"; // Import the composable

// Get the color mode composable
const colorMode = useColorMode();

// Function to toggle between 'light' and 'dark'
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const isOpen = ref<boolean>(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const path = useRoute();

const navLinks = computed(() => [
  {
    name: "Home",
    link: "home",
    active: path.name === "home",
  },
  {
    name: "About",
    link: "about",
    active: path.name === "about",
  },
  {
    name: "Projects",
    link: "projects",
    active: path.name === "projects",
  },
  {
    name: "Contact",
    link: "contact",
    active: path.name === "contact",
  },
]);
</script>

<template>
  <header class="py-4 px-6">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
      <h1 class="text-2xl font-bold text-black dark:text-white">
        Chafik
        <span class="text-blue-800">Dev</span>
      </h1>

      <button
        class="cursor-pointer lg:hidden focus:outline-none"
        @click="toggleMenu"
        aria-controls="mobile-menu-links"
        :aria-expanded="isOpen"
      >
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-icon lucide-x text-black dark:text-white"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu text-black dark:text-white"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>

      <nav class="hidden lg:flex items-center gap-8">
        <ul
          v-for="(link, index) in navLinks"
          :key="index"
          class="flex items-center gap-4 text-black dark:text-white"
        >
          <li
            class="hover:text-blue-500"
            :class="{ 'text-green-600! border-b font-bold': link.active }"
          >
            <NuxtLink :to="{ name: link.link }">{{ link.name }}</NuxtLink>
          </li>
        </ul>
        <button @click="toggleColorMode" class="text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon-icon lucide-moon w-5 block dark:hidden"
          >
            <path
              d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun-icon lucide-sun w-5 hidden dark:block"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
      </nav>
    </div>

    <div
      v-show="isOpen"
      id="mobile-menu-links"
      class="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700 mt-4"
    >
      <ul 
        v-for="(link, index) in navLinks" :key="index"
        class="flex flex-col gap-4 text-black dark:text-white"
      >
        <li
          class="hover:text-blue-500"
          :class="{ 'inline text-green-600! font-bold': link.active }"
        >
          <NuxtLink :to="{ name: link.link }">{{ link.name }}</NuxtLink>
        </li>
      </ul>
      <button @click="toggleColorMode" class="text-black dark:text-white mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-moon-icon lucide-moon w-5 block dark:hidden"
        >
          <path
            d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-sun-icon lucide-sun w-5 hidden dark:block"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
