<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toRefs, ref } from 'vue'

const props = defineProps({
  title: String,
})
const { title } = toRefs(props)
const isOpen = ref(false)
</script>

<template>

  <nav>
    <div class="flex justify-between items-center mt-2">
      <div class="flex-1">
        <!-- none -->
      </div>
      <div class="flex-4">
        <RouterLink to="/" class="text-2xl md:text-4xl my-2 font-semibold font-mono text-gray-700"> {{ title }} </RouterLink>
      </div>
      <div class="flex-1 text-right">
        <button @click="isOpen=!isOpen" class="md:hidden m-4 text-gray-700" type="button" data-collapse-toggle="navbar-default" aria-control="navbar-default">
          <span class="sr-only">Open menu</span>
          <font-awesome-icon class="border-gray-700 rounded " icon="fa-solid fa-bars" size="2xl"/>
        </button>
      </div>
    </div>
    <div class="flex flex-wrap justify-end md:justify-center m-2">
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul :class="isOpen ? 'flex' : 'hidden'" class="md:flex flex-col md:flex-row md:space-x-8 border-y md:border-y-0 mx-2">
          <li class="m-2 text-center font-semibold font-mono text-gray-500 hover:underline"><RouterLink to="/">        Home     </RouterLink></li>
          <li class="m-2 text-center font-semibold font-mono text-gray-500 hover:underline"><RouterLink to="about">    About    </RouterLink></li>
          <li class="m-2 text-center font-semibold font-mono text-gray-500 hover:underline"><RouterLink to="projects"> Projects </RouterLink></li>
          <li class="m-2 text-center font-semibold font-mono text-gray-500 hover:underline"><RouterLink to="contact">  Contact  </RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>

</template>
