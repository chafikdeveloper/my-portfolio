<script setup lang="ts">
const isLoading = ref<boolean>(false)
const status = reactive({
  title: "",
  color: "",
});

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleForm = async () => {
  try {
    if (!(form.name && form.email && form.message)) {
      status.title = "All the fields are required";
      status.color = "red";
      return;
    }

    isLoading.value = true;

    const result = await $fetch.raw("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    });

    if (result._data?.error) {
      status.title = "Something went wrong, please try again";
      status.color = "red";
      return;
    }

    form.name = "";
    form.email = "";
    form.message = "";

    status.title =
      "Your message was sent successfully, I'll be in touch very soon";
    status.color = "green";
  } catch (error) {
    status.title = "A network error occured, please check you connection";
    status.color = "red";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    class="px-8 py-4 rounded-md shadow bg-gray-900 text-red-500 text-green-500"
  >
    <div class="my-2" v-if="status">
      <p :class="`text-${status.color}-500`">{{ status.title }}</p>
    </div>
    <form @submit.prevent="handleForm" class="flex flex-col space-y-6">
      <div class="flex flex-col space-y-2">
        <label for="name" class="text-white font-semibold">Name</label>
        <input
          v-model="form.name"
          type="text"
          name="name"
          id="name"
          class="px-2 py-1 rounded-md bg-gray-200 text-black"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="email" class="text-white font-semibold">Email</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          id="email"
          class="px-2 py-1 rounded-md bg-gray-200 text-black"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="message" class="text-white font-semibold">Message</label>
        <textarea
          v-model="form.message"
          name="message"
          id="message"
          rows="6"
          class="px-2 py-1 rounded-md bg-gray-200 text-black"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-emerald-900 text-emerald-400 font-bold rounded-md py-2 mt-4"
      >
        {{isLoading ? 'Sending message...' : 'Send message'}}
      </button>
    </form>
  </div>
</template>
