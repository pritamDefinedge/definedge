<template>
  <div
    class="bg-gray-100 hover:bg-gray-300 transition duration-300 ease-in-out border-2 border-transparent hover:border-gray-500 px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-sans overflow-hidden mx-2 mt-4 flex flex-col items-center"
  >
    <img
      :src="member.image"
      :alt="member.name"
      class="w-60 h-60 rounded-full object-cover"
    />
    <div class="mt-6 text-center">
      <p class="text-base text-gray-800 font-bold uppercase">
        {{ member.name }}
      </p>
      <h3 class="text-gray-700 text-base mt-3 leading-relaxed">
        {{ member.position }}
      </h3>
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


