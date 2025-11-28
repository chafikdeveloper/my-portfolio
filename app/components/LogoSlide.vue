<script setup lang="ts">
const icons = [
  {
    name: "php",
    url: "material-icon-theme:php",
  },
  {
    name: "javascript",
    url: "material-icon-theme:javascript",
  },
  {
    name: "typescript",
    url: "material-icon-theme:typescript",
  },
  {
    name: "laravel",
    url: "material-icon-theme:laravel",
  },
  {
    name: "node.js",
    url: "material-icon-theme:nodejs-alt",
  },
  {
    name: "express.js",
    url: "skill-icons:expressjs-light",
  },
  {
    name: "html",
    url: "material-icon-theme:html",
  },
  {
    name: "vue.js",
    url: "material-icon-theme:vue",
  },
  {
    name: "nuxt.js",
    url: "material-icon-theme:nuxt",
  },
  {
    name: "astro.js",
    url: "material-icon-theme:astro",
  },
  {
    name: "postgreSQL",
    url: "devicon:postgresql",
  },
  {
    name: "mysql",
    url: "logos:mysql",
  },
  {
    name: "tailwindcss",
    url: "material-icon-theme:tailwindcss",
  },
  {
    name: "drizzle",
    url: "material-icon-theme:drizzle",
  },
  {
    name: "supabase",
    url: "material-icon-theme:supabase",
  },
  {
    name: "neon",
    url: "logos:neon-icon",
  },
  {
    name: "git",
    url: "material-icon-theme:git",
  },
  {
    name: "github",
    url: "mdi:github",
  },
  {
    name: "docker",
    url: "material-icon-theme:docker",
  },
  {
    name: "netlify",
    url: "material-icon-theme:netlify",
  },
  {
    name: "hostinger",
    url: "simple-icons:hostinger",
  },
];
</script>

<template>
  <div class="relative overflow-x-hidden py-8 mt-16">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-(--background) to-transparent z-20"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-(--background) to-transparent z-20"
    ></div>

    <div
      class="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max"
    >
      <div
        class="flex items-center gap-2 group transition-all duration-300"
        v-for="icon in icons"
      >
        <Icon
          :name="icon.url"
          class="text-3xl font-medium text black dark:text-white"
        />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 60s linear infinite;
}

@media (min-width: 768px) {
  .animate-scroll {
    animation-duration: 50s;
  }
}
</style>
