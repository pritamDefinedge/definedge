<template>
  <div
    class="group relative hover:bg-gray-300 transition duration-300 ease-in-out border-2 border-transparent px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-sans overflow-hidden mx-2 mt-4 flex flex-col items-center motion-preset-bounce"
  >
    <!-- Skeleton Background Circle on Hover -->
    <span
      class="absolute top-10 z-0 w-60 h-60 rounded-full bg-gray-300 animate-pulse"
    ></span>

    <!-- Skeleton Profile Image -->
    <div
      class="relative w-60 h-60 rounded-full overflow-hidden bg-gray-300 animate-pulse"
    >
      <div class="w-full h-full bg-gray-400 animate-pulse"></div>
    </div>

    <!-- Skeleton Text Content -->
    <div class="relative z-10 mt-6 text-center">
      <!-- Skeleton Name -->
      <p
        class="text-base text-gray-800 font-bold uppercase bg-gray-300 animate-pulse h-5 w-40 mx-auto mb-2"
      ></p>

      <!-- Skeleton Position -->
      <p
        class="text-gray-700 text-base leading-relaxed bg-gray-300 animate-pulse h-4 w-32 mx-auto"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Optional: Add any additional styles to make the skeleton more visually appealing */
</style>
