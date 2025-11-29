<script setup lang='ts'>
definePageMeta({
    name: 'contact'
})

useHead({
    title: 'Chafik Chegma | Contact'
})

const email = process.env.EMAIL
const phone = process.env.PHONE

const linkedin = process.env.LINKEDIN_LINK
const instagram = process.env.INSTAGRAM_LINK
const github = process.env.GITHUB_LINK
</script>

<template>
    <h1 class="text-3xl font-bold text-center mt-8 text-black dark:text-white">Contact</h1>

    <section class="flex flex-col gap-8 lg:gap-0 lg:flex-row md:justify-between p-6 mx-auto max-w-7xl lg:mt-8">
        <div class="w-full">
            <ContactForm />
        </div>

        <div class="w-full flex flex-col justify-center items-center">
            <div class="flex flex-col justify-between bg-gray-900 px-8 py-4 rounded-md space-y-8">
                <div>
                    <h5 class="mb-4 text-white!">Contact me</h5>
                    <div class="flex flex-col space-y-4">
                        <div>
                            <NuxtLink :to="`mailto:${email}`" class="flex items-center gap-4">
                                <Icon name="mdi:email" class="text-white hover:text-emerald-500" size="24" />
                                <p class="dark:text-white">{{ email }}</p>
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink :to="`https://wa.me/${phone}`" target="_blank" class="flex items-center gap-4">
                                <Icon name="mdi:whatsapp" class="text-white hover:text-green-500" size="24" />
                                <p class="dark:text-white">{{ phone }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 class="mb-4 text-white!">Connect with me</h5>
                    <div class="flex items-center gap-4">
                        <NuxtLink :to="linkedin" target="_blank">
                            <Icon name="mdi:linkedin" class="text-white cursor-pointer hover:text-green-500" size="28" />
                        </NuxtLink>
                        <NuxtLink :to="instagram" target="_blank">
                            <Icon name="mdi:instagram" class="text-white cursor-pointer hover:text-green-500" size="28" />
                        </NuxtLink>
                        <NuxtLink :to="github" target="_blank">
                            <Icon name="mdi:github" class="text-white cursor-pointer hover:text-green-500" size="28" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>