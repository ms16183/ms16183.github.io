<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({
    path: String,
    devicon: String,
    title: String,
    years: Number,
    discription: String,
  })
  const { path, devicon, title, years, discription } = toRefs(props)
</script>

<template>
  
  <div class="m-6 bg-white border-0 rounded-xl sm:flex">
    <div class="flex-shrink-0 relative w-28 h-28 max-w-xs">
      <img
        class="w-full h-full absolute sm:justify-center pt-0  object-cover"
        :src="path"
        :alt="title"
      />
      <!--<img
        class="w-full h-full absolute md:top-auto md:left-auto object-cover"
        :src="path"
        :alt="title"
      />-->
    </div>
    <div class="flex flex-wrap">
      <div class="flex flex-col h-full p-4">
        <h1 class="text-3xl font-semibold text-gray-700">{{ title }}</h1>
        <p class="text-gray-700 font-semibold" v-if="years!==undefined">{{ years }} years</p>
        <p class="text-gray-700"><slot></slot></p>
      </div>
    </div>
  </div>


</template>
