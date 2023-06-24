<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({
    image: String,
    title: String,
    link: String,
  })
  const { image, title, link } = toRefs(props)
</script>

<template>
  <div class="bg-white border-2 border-gray-200 rounded-lg max-w-xl m-8">
    <img class="rounded-t-md" :src="image">
    <h1 class="text-3xl font-semibold text-gray-700 m-2"> {{ title }} </h1>
    <p class="p-3">
    <slot></slot>
    </p>
    <a :href="link" target="_blank" class="m-2 mb-8 text-[#ff5381]">
      Click here <font-awesome-icon class="text-[#ff5381]" :icon="['fas', 'arrow-up-right-from-square']" />
    </a>
  </div>

</template>