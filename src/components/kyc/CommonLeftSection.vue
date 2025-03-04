<template>
  <section class="lg:col-span-4">
    <!-- Mobile Header -->
    <div
      class="p-2 border-b bg-blue-600 block rounded-lg lg:hidden h-full xl:h-100 text-indigo-300 relative"
    >
      <div class="flex justify-between items-center">
        <img
          class="h-8 lg:h-9 w-auto"
          src="../../assets/definedge-light-logo.png"
          alt="definedge"
        />
        <div class="lg:hidden block">
          <div
            class="flex items-center border border-slate-200 px-3 py-1 text-white text-xs rounded-full cursor-pointer"
          >
            <div class="w-4 h-4 flex-none">
              <img
                class="w-4 h-4"
                src="../../assets/file-text-white.svg"
                alt="definedge"
              />
            </div>
            <div class="ml-1 pt-0.5 whitespace-nowrap">Doc Guidelines</div>
          </div>
        </div>
        <img
          class="h-7 lg:h-9 w-auto cursor-pointer"
          src="../../assets/slidemenu-white-icon.svg"
          alt="definedge"
        />
      </div>
    </div>

    <!-- Desktop Sidebar -->
    <div
      class="p-8 bg-blue-600 rounded-xl hidden lg:block h-full xl:h-100 text-indigo-300 relative"
    >
      <div class="flex justify-between items-center">
        <img
          class="h-10 lg:h-9 w-auto"
          src="../../assets/definedge-light-logo.png"
          alt="definedge"
        />
        <img
          class="h-10 lg:h-9 w-auto block lg:hidden"
          src="https://signup.definedgesecurities.com/assets/close-white-icon-16c4318d.svg"
          alt="definedge"
        />
      </div>
      <nav aria-label="Progress" class="mt-8">
        <ol
          class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"
        >
          <li class="mb-10 ms-6">
            <span
              v-if="steps.length > 1"
              class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
            >
              <svg
                class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>

            <span
              v-else
              class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20c0-2.21 4-4 6-4s6 1.79 6 4"
                />
              </svg>
            </span>

            <h3 class="font-medium leading-tight text-sm text-white">
              Personal Information
            </h3>
            <p class="text-sm text-white">
              Mobile, Email, PAN, Aadhaar, Your Profile
            </p>
          </li>
          <li class="mb-10 ms-6">
            <span
              v-if="steps.length > 2"
              class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
            >
              <svg
                class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <span
              v-else
              class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                />
              </svg>
            </span>
            <h3 class="font-medium leading-tight text-sm text-gray-300">
              Trading Information
            </h3>
            <p class="text-sm text-gray-300">
              Segment, Photo, Signature, Nominee
            </p>
          </li>
          <li class="mb-10 ms-6">
            <span
              v-if="steps.length > 3"
              class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
            >
              <svg
                class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <span
              v-else
              class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
                />
              </svg>
            </span>
            <h3 class="font-medium leading-tight text-sm text-gray-300">
              Bank Details
            </h3>
            <p class="text-sm text-gray-300">
              Saving Account, IFSC Code, Upload DOC
            </p>
          </li>
          <li class="ms-6">
            <span
              v-if="steps.length > 4"
              class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
            >
              <svg
                class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <span
              v-else
              class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
                />
              </svg>
            </span>
            <h3 class="font-medium leading-tight text-sm text-gray-300">
              Final Steps
            </h3>
            <p class="text-sm text-gray-300">Verify Info, E-sign</p>
          </li>
        </ol>
      </nav>
      <div class="mt-12">
        <img :src="src" alt="steps" />
      </div>
      <div class="mt-12">
        <h2 class="text-xl xl:text-xl 2xl:text-xl text-white font-medium">
          Super Demat with a GrowthMap
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CommonLeftSection",
  props: {
    src: {
      type: String,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
