<template>
  <!-- FAQ -->
  <h4 class="text-center text-3xl font-semibold mb-6">FAQs</h4>
  <div class="border divide-y rounded-lg">
    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 1,
          'text-gray-800 hover:text-blue-600': openIndex !== 1,
        }"
        @click="toggle(1)"
      >
        <span class="mr-4"> Why should I open a Super Demat? </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 1 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 1 }" class="py-12 p-5">
        <p class="text-sm text-gray-600 leading-relaxed">
          With your Definedge Super Demat, you get access to a range of 15+
          tools that offer transformative education, actionable analysis and
          effortless execution. To know about all the products you get with your
          super demat,
          <a
            class="text-blue-500"
            href="https://signup.definedgesecurities.com/"
            >Click here</a
          >
        </p>
        <br />
        <p class="text-sm text-gray-600 leading-relaxed">
          If you want to go PRO, you can try our PRO products for a month,
          before you decide to commit. You get all subscriptions effectively
          free, as your purchase amount is converted to wallet points to be used
          against your brokerage.
        </p>
        <br />
        <p class="text-sm text-gray-600 leading-relaxed">
          You also get access to two of our expert-guided courses on Gurukul by
          Definedge.
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 2,
          'text-gray-800 hover:text-blue-600': openIndex !== 2,
        }"
        @click="toggle(2)"
      >
        <span class="mr-4">
          Are all tools available for free with Definedge super demat?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 2 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 2 }" class="py-12 p-5">
        <p class="text-sm text-gray-600 leading-relaxed">
          With your super demat, you get access to our Definedge universe of 15+
          tools for education, analysis, and trading. All the basic versions of
          the software are available for free. You also get access to our PRO
          tools for a month at no cost, before you decide to commit.
        </p>
        <br />
        <p class="text-sm text-gray-600 leading-relaxed">
          All our subscriptions are effectively free as your purchase amount is
          converted to wallet points to be used against your brokerage.
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 3,
          'text-gray-800 hover:text-blue-600': openIndex !== 3,
        }"
        @click="toggle(3)"
      >
        <span class="mr-4"> How can I open a Super demat with Definedge? </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 3 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 3 }" class="py-12 p-5">
        <p class="text-sm text-gray-600 leading-relaxed">
          You can get your Definedge Super Demat in minutes with a simple 3-step
          process explained above. To get your Super Demat,
          <a
            class="text-blue-500"
            href="https://signup.definedgesecurities.com/"
            >Click here</a
          >
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 4,
          'text-gray-800 hover:text-blue-600': openIndex !== 4,
        }"
        @click="toggle(4)"
      >
        <span class="mr-4"> Is the Definedge Super Demat free? </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 4 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 4 }" class="py-12 p-5">
        <p class="text-sm text-gray-600 leading-relaxed">
          Yes, the Definedge Super Demat is effectively free with our Wallet
          feature. Your account opening charges are converted into wallet
          points, which you can use against your brokerage.
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 5,
          'text-gray-800 hover:text-blue-600': openIndex !== 5,
        }"
        @click="toggle(5)"
      >
        <span class="mr-4">
          What kind of demat account can I open with Definedge?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 5 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 5 }" class="py-12 p-5">
        <ul>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Individual Demat account
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Corporate Demat account
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> HUF (Hindu Undivided Family)
            Demat account
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> NRI Demat account
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Demat account for minors
          </li>
        </ul>
        <p>
          If you need help opening any of these demat accounts with Definedge,
          reach out to us at
          <a class="text-blue-500" href="mailto:care@definedgesecurities.com"
            >care@definedgesecurities.com</a
          >
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 6,
          'text-gray-800 hover:text-blue-600': openIndex !== 6,
        }"
        @click="toggle(6)"
      >
        <span class="mr-4">
          What is the minimum balance for Demat Account?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 6 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 6 }" class="py-12 p-5">
        <p class="text-sm text-gray-600 leading-relaxed">
          There is no minimum balance required to open or maintain your Demat
          account.
        </p>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="w-full text-base text-left font-semibold p-5"
        :class="{
          'text-blue-600 bg-blue-50': openIndex === 7,
          'text-gray-800 hover:text-blue-600': openIndex !== 7,
        }"
        @click="toggle(7)"
      >
        <span class="mr-4">
          What documents are required for Demat Account opening?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-current ml-auto transition-transform"
          :class="{ 'rotate-180': openIndex === 7 }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: openIndex !== 7 }" class="py-12 p-5">
        <ul>
          <li class="mb-2"><i class="fas fa-check-circle"></i> PAN card</li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Identity proof (preferably
            Aadhar Card)
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Address proof
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Account Holder details (like a
            canceled cheque or bank statement)
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> Nominee details
          </li>
          <li class="mb-2">
            <i class="fas fa-check-circle"></i> If you wish to trade in
            derivatives, you may need additional documents like ITR
            acknowledgment or your account statement.
          </li>
        </ul>
        <p>
          To know the basic requirements of opening a Demat account or to open
          your own Definedge Securities Demat account,
          <a
            class="text-blue-500"
            href="https://signup.definedgesecurities.com/"
            >Click here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive, toRefs, onMounted } from "vue"; // Import from Vue 3 if needed

export default {
 
  data() {
    return {
      openIndex: null,
    };
  },

  setup() {
  

    return {
      ...toRefs(),
    };
  },
  methods: {
    toggle(index) {
      if (this.openIndex === index) {
        this.openIndex = null; // Close if it's already open
      } else {
        this.openIndex = index; // Open the clicked FAQ
      }
    },
  

  
  },
};
</script>
<style lang="scss" scoped></style>
