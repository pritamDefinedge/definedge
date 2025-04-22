<template>
  <!-- Banner Section -->
  <section class="relative font-sans">
    <!-- Background Image -->
    <img src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/banner-12-scaled.jpg" alt="Banner Image"
      class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Overlay for Light & Dark Modes -->
    <div class="absolute inset-0 bg-black/50 dark:bg-black/70 z-10"></div>

    <!-- Content -->
    <div
      class="relative z-20 min-h-[380px] flex flex-col justify-center items-center text-center max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
        Associate
      </h2>

      <ul class="flex items-center space-x-3 text-white/80 dark:text-white/70 text-base sm:text-lg">
        <li>
          <a href="https://www.definedgesecurities.com" class="hover:underline transition">
            Home
          </a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-white/70 dark:fill-white/50 rotate-90"
            viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"></path>
          </svg>
        </li>
        <li class="cursor-default">Associate</li>
      </ul>
    </div>
  </section>


  <section class="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Content Card -->
      <div
        class="w-full max-w-6xl mx-auto bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            Together, let's embark on a
            <span class="text-blue-600 dark:text-blue-400">success journey</span>
          </h2>

          <div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p class="flex items-start">
              <span class="hidden md:inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
              Join us on the journey to make a positive impact on the lives of traders and investors.
            </p>
            <p class="flex items-start">
              <span class="hidden md:inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
              A major driving force behind Definedge is the desire to provide traders and investors with some innovative research and tools that can be beneficial to them in some way.
            </p>
            <p class="flex items-start">
              <span class="hidden md:inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
              If you have a group of people associated with you and you believe our thought processes are aligned, we can work together. Traders and investors associated with you can benefit from our efforts and we can make a difference in their journey of trading and investing.
            </p>
            <p class="flex items-start">
              <span class="hidden md:inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
              A simple online process allows you to become our associate.
            </p>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div
        class="w-full max-w-6xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 md:p-10 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600">
        <div class="text-center mb-10">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Become Our Partner
          </h3>
          <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Fill out the form below and our team will contact you shortly
          </p>
        </div>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Name Field -->
          <div class="space-y-2">
            <label for="assocname" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name <span class="text-red-500">*</span>
            </label>
            <input id="assocname" type="text" name="fullname" placeholder="Your full name"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
              required />
          </div>

          <!-- City Field -->
          <div class="space-y-2">
            <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              City <span class="text-red-500">*</span>
            </label>
            <input id="city" type="text" name="city" placeholder="Your city"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
              required />
          </div>

          <!-- Mobile Field -->
          <div class="space-y-2">
            <label for="mobnumber" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mobile Number <span class="text-red-500">*</span>
            </label>
            <input id="mobnumber" type="tel" name="mobile" placeholder="Your mobile number"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
              required />
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email <span class="text-red-500">*</span>
            </label>
            <input id="email" type="email" name="email" placeholder="Your email address"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
              required />
          </div>

          <!-- Description Section -->
          <div class="md:col-span-2 space-y-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              About You <span class="text-red-500">*</span>
            </label>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Please tell us about yourself and your business plan. Include your social media channels if applicable.
            </p>
            <textarea id="desc" name="message" rows="5"
              placeholder="Describe your background, experience, and how you'd like to collaborate with us..."
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
              required></textarea>
          </div>

          <!-- Submit Button -->
          <div class="md:col-span-2 flex justify-center mt-6">
            <button type="submit"
              class="shine shine-anim relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
              <span
                class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative flex items-center">
                <span>Submit Application</span>
                <svg class="ml-2 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
