<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 w-full mx-auto bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
    @click.self="closeModal"
  >
    <div
      class="border-0 xl:w-7/12 w-11/12 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none"
    >
      <div
        class="flex items-center justify-between px-5 pt-4 pb-2 border-b border-solid border-slate-200 rounded-t"
      >
        <div>
          <h3 class="text-sm lg:text-lg font-semibold">
            Documents Required and General Guidelines
          </h3>
          <p class="text-xs font-normal text-gray-500">
            For Resident Individual. (Non-individual and NRI, please contact
            <a
              href="mailto:care@definedge.com"
              target="_blank"
              class="text-xs font-normal text-blue-700"
              >care@definedge.com</a
            >
            )
          </p>
        </div>
        <button
          @click="closeModal"
          class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        >
          <span
            class="text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
            ><img
              class="w-4 h-4 flex-none"
              src="../assets/close-icon.svg"
              alt="definedge"
          /></span>
        </button>
      </div>
      <div class="relative px-5 py-4 pb-4">
        <p
          class="sm:text-xs text-xs lg:text-sm text-gray-800 font-medium pb-3 mb-2"
        >
          Following documents are required to Open Trading and Demat Account
          with Definedge Securities
        </p>
        <div class="divide-y divide-slate-200 h-96 overflow-auto px-4">
          <div class="py-2.5">
            <h5
              class="text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              1. PAN Card:
            </h5>
            <p
              class="text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-500 leading-2"
            >
              (Format : JPEG, JPG or PNG)
            </p>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              2. Aadhaar Number:
            </h5>
            <p
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-500 leading-2"
            >
              (Linked With Your Registered Mobile Number) and Email Id
            </p>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              3. Account Holder Bank Details:
            </h5>
            <p
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-500 leading-2"
            >
              (<span class="text-blue-900 font-medium">Any One </span> of the
              following documents)
            </p>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Cancelled cheque leaf with your name
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  The first page of the passbook with your name and bank account
                  details &amp; latest transaction pages
                </p>
              </div>
              <div class="flex justify-start items-start">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Latest 3 months bank statement with your name and bank account
                  details
                </p>
              </div>
            </div>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              4. Additional Documents:
            </h5>
            <p
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-500 leading-2"
            >
              (<span class="text-blue-900 font-medium">Any One </span> in case
              of Opting for Future and Options or Currency or Commodity)
            </p>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  In case of Salary income - Latest Salary Slip / Latest Form 16
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Bank Account statement for last 6 months
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  ITR Acknowledgement
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Demat account holding statement
                </p>
              </div>
              <div class="flex justify-start items-start">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Net worth certificates certified by CA
                </p>
              </div>
            </div>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              5. Signature Image:
            </h5>
            <p
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-500 leading-2"
            >
              (Format : JPEG, JPG or PNG)
            </p>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              6. Basic Services Demat Account (BSDA):
            </h5>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  To know more about BSDA, please click on the link :
                  <a
                    href="https://www.definedgesecurities.com/pdf/BSDA.pdf "
                    class="md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-blue-900 leading-2"
                    >https://www .definedgesecurities. com/pdf/BSDA.pdf</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              7. Aadhaar:
            </h5>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  The act of providing your Aadhaar is voluntary in nature. If
                  you choose not to share your Aadhaar information, you may
                  alternatively choose to open Account by offline route, which
                  does not require you to share your Aadhaar information.
                </p>
              </div>
            </div>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              8. Live Photo Instruction:
            </h5>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Customer needs to ensure he is within India while opening
                  account in Online Mode (e-KYC). This is as per SEBI
                  guidelines. If during the online account process, the
                  Geo-location gets tagged as Outside India, then form will get
                  rejected and he cannot proceed further. Such customers can opt
                  for Offline Account process (Physical form). To Know more
                  about this process, customer can write to care@definedge.com
                  or call on - 020-61923200
                </p>
              </div>
            </div>
          </div>
          <div class="py-2.5">
            <h5
              class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-gray-800 leading-2"
            >
              9. Risk Disclosures on Derivatives:
            </h5>
            <div class="border-l-2 border-slate-200 p-4 mt-2">
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  9 out of 10 individual traders in equity Futures and Options
                  Segment, incurred net losses
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  On an average, loss makers registered net trading loss close
                  to 50,000
                </p>
              </div>
              <div class="flex justify-start items-start mb-2">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Over and above the net trading losses incurred, loss makers
                  expended an additional 28% of net trading losses as
                  transaction costs
                </p>
              </div>
              <div class="flex justify-start items-start">
                <div class="w-4 h-4 mr-1 flex-none">
                  <img
                    class="w-4 h-4 flex-none"
                    src="../assets/arrow-right-circle.svg"
                    alt="definedge"
                  />
                </div>
                <p
                  class="text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-xs font-normal text-gray-600 leading-2"
                >
                  Those making net trading profits, incurred between 15% to 50%
                  of such profits as transaction cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:isVisible", false);
    },
  },
};
</script>
