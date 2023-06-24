<script setup>
  import { ref } from 'vue';
  let isHover = ref(false);

</script>
<template>
  <div
    @mouseenter="isHover=true"
    @mouseleave="isHover=false"
  >
    <a href="https://github.com/ms16183" target="_blank">
      <img
          class="w-72 rounded-full border-2 border-gray-200"
          :src="isHover ? 'https://raw.githubusercontent.com/ms16183/Rabbit-Eye-Patch/main/svg/REP2.svg' : 
                          'https://raw.githubusercontent.com/ms16183/Rabbit-Eye-Patch/main/svg/REP.svg'"
          alt="my icon"
          />
    </a>
  </div>
</template>

<!--
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
-->