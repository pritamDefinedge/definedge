<template>
  <!-- Banner Section -->
  <section
    class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10"
  >
    <img
      src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/banner-12-scaled.jpg"
      alt="Banner Image"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6"
    >
      <h2 class="text-white sm:text-4xl text-2xl font-normal mb-2">
        Associate
      </h2>
      <ul
        class="flex items-center justify-center font-[sans-serif] space-x-4 mt-4"
      >
        <li
          class="text-[#ffffffab] cursor-pointer text-xl lg:text-base hover:underline"
        >
          <a href="https://www.definedgesecurities.com">Home</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-gray-400 w-3.5 -rotate-90"
            viewBox="0 0 24 24"
            aria-label="Arrow Icon"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </li>
        <li class="text-[#ffffffab] text-xl lg:text-base cursor-pointer">
          Associate
        </li>
      </ul>
    </div>
  </section>

  <!-- Content Section -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="w-full rounded-lg font-[sans-serif] max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-left mb-4">
          Together, let's embark on a success journey
        </h2>
        <p class="text-left text-xl lg:text-base text-gray-500 mb-4">
          Join us on the journey to make a positive impact on the lives of
          traders and investors.
        </p>
        <p class="text-left text-xl lg:text-base text-gray-500 mb-4">
          A major driving force behind Definedge is the desire to provide
          traders and investors with some innovative research and tools that can
          be beneficial to them in some way.
        </p>
        <p class="text-left text-xl lg:text-base text-gray-500 mb-4">
          If you have a group of people associated with you and you believe our
          thought processes are aligned, we can work together. Traders and
          investors associated with you can benefit from our efforts and we can
          make a difference in their journey of trading and investing.
        </p>
        <p class="text-left text-xl lg:text-base text-md text-gray-500 mb-4">
          A simple online process allows you to become our associate.
        </p>
        <p class="text-left text-xl lg:text-base text-gray-500">
          Please fill out the form below if you are interested in becoming our
          affiliate or business partner. Our team will contact you for further
          information.
        </p>
      </div>

      <!-- Form Section -->
      <div
        class="w-full mx-auto p-6 my-12 font-[sans-serif] max-w-5xl bg-[#dbf0f7] rounded-lg shadow-md"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              for="assocname"
              class="block text-sm font-medium text-gray-700"
            >
              Name<span class="text-red-500">*</span>
            </label>
            <input
              id="assocname"
              type="text"
              name="fullname"
              placeholder="Name"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label for="city" class="block text-sm font-medium text-gray-700">
              City<span class="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="mobnumber"
              class="block text-sm font-medium text-gray-700"
            >
              Mobile Number<span class="text-red-500">*</span>
            </label>
            <input
              id="mobnumber"
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email id<span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div class="col-span-2">
            <label class="block font-medium text-xl lg:text-base text-gray-700">
              Description<span class="text-red-500">*</span>
            </label>
            <p class="text-gray-600 text-xl lg:text-base mb-2">
              Please explain about yourself and your plan for the business in
              brief.
            </p>
            <p class="text-xl lg:text-base text-gray-600 mb-4">
              Please mention your social media channels and handles as well.
            </p>
          </div>
          <div class="col-span-2">
            <textarea
              id="desc"
              name="message"
              rows="4"
              placeholder="Write your message here"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div class="col-span-2 text-center">
            <button
              class="group relative m-1 w-full md:w-1/5 cursor-pointer overflow-hidden rounded-md border-2 bg-blue-600 border-white py-3 px-4 ml-3 focus:outline-none font-semibold transition-all ease-in-out duration-300 transform hover:scale-105 motion-preset-seesaw"
            >
              <span
                class="ease absolute top-1/2 h-0 w-60 origin-center -translate-x-20 rotate-45 bg-blue-700 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
              ></span>
              <span
                class="ease relative text-white transition duration-300 group-hover:text-white"
              >
                Submit</span
              >
            </button>
          </div>
        </div>
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
