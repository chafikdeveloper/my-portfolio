<script setup lang="ts"></script>

<template>
  <section
    class="flex flex-col-reverse lg:flex-row lg:justify-between items-center mt-12 lg:mt-32 max-w-7xl mx-auto px-16"
  >
    <div class="flex flex-col items-center space-y-4 mt-4 lg:items-start">
      <p class="text-gray-600 dark:text-gray-400 text-lg">Hey 👋, I’m</p>

      <h1
        class="font-extrabold text-4xl md:text-6xl tracking-tight text-center lg:text-left"
      >
        <span
          class="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Chafik Chegma
        </span>
      </h1>

      <UiShinyText
        text="Full Stack Developer"
        class="text-4xl text-green-600 font-semibold text-center lg:text-left"
        :disabled="false"
        :speed="3"
      />

      <div class="flex flex-col space-y-1 text-center lg:text-left text-black dark:text-white">
        <p class="text-lg font-medium">
          I help people bring their idea to life by
        </p>
        <p class="text-lg font-medium">
          creating
          <ClientOnly>
            <UiTextType
              :text="[
                'modern design',
                'minimalistic style',
                'performante',
                'problem-solving',
              ]"
              :show-cursor="false"
              :pause-duration="1000"
              :typing-speed="75"
              class="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            />
          </ClientOnly>
          web apps
        </p>
      </div>

      <div class="flex gap-4 mt-4">
        <NuxtLink :to="{name: 'projects'}">
          <button class="px-4 py-2 rounded-full bg-emerald-600 dark:bg-emerald-800 text-white dark:text-emerald-100 font-bold cursor-pointer">
            View projects
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="lg:ml-20">
      <img
        class="animate-gradient-border w-64 h-64 p-1 rounded-full"
        src="/my-image.jpg"
        alt="my image avatar"
        loading="lazy"
      />
    </div>
  </section>
</template>
