<template>
  <div
    class="group relative hover:bg-gray-300 transition duration-300 ease-in-out border-2 border-transparent px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-sans overflow-hidden mx-2 mt-4 flex flex-col items-center motion-preset-bounce"
  >
    <!-- Background Circle on Hover -->
    <span
      class="absolute top-10 z-0 w-60 h-60 rounded-full bg-[#000] transition-all duration-500 group-hover:scale-[10] "
    ></span>

    <!-- Profile Image with background color change on hover -->
    <div
      class="relative w-60 h-60 rounded-full overflow-hidden group-hover:bg-[#00a1e1] transition-all duration-500"
    >
      <img
        :src="member.image"
        :alt="member.name"
        class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
      />
    </div>

    <!-- Text Content -->
    <div class="relative z-10 mt-6 text-center">
      <!-- Name -->
      <p
        class="text-base text-gray-800 font-bold uppercase transition-all duration-300 group-hover:text-white"
      >
        {{ member.name }}
      </p>

      <!-- Position -->
      <p
        class="text-gray-700 text-base leading-relaxed transition-all duration-300 group-hover:text-gray-100"
      >
        {{ member.position }}
      </p>
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
