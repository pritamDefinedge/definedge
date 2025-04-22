<template>
<section class="relative font-sans">
  <!-- Background Image -->
  <img src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/common-banner-scaled.jpg"
    alt="Banner Image"
    class="absolute inset-0 w-full h-full object-cover z-0" />

  <!-- Dark Overlay for readability -->
  <div class="absolute inset-0 bg-black/40 dark:bg-black/60 z-0"></div>

  <!-- Content -->
  <div class="relative z-10 min-h-[380px] h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center px-4 py-12">
    <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Pricing
    </h2>

    <ul class="flex items-center justify-center space-x-3 text-sm sm:text-base text-white/80 dark:text-white/70">
      <li class="hover:underline transition">
        <a href="https://www.definedgesecurities.com">Home</a>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-white/70 dark:fill-white/50 w-3.5 rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li class="cursor-default">Pricing</li>
    </ul>
  </div>
</section>




  <section
    class="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="lg:text-4xl text-3xl font-bold mb-4 text-[#0E101A] dark:text-white relative inline-block">
          Competitive Pricing
          <div class="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-blue-600 rounded-full"></div>
          <div
            class="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-1 bg-blue-400 rounded-full opacity-70">
          </div>
        </h2>
        <p class="lg:text-2xl text-base text-[#0E101A] dark:text-gray-300 mb-4 max-w-3xl mx-auto">
          We are upfront and transparent about our brokerage and pricing.
        </p>
      </div>

      <!-- Flex Container for Cards -->
      <div class="flex flex-wrap justify-center gap-6 py-4" ref="contentSection">
        <!-- Card 1: Intraday -->
        <div
          class="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-xl overflow-hidden transform hover:-translate-y-1"
          :class="{
            'opacity-100': hasScrolled,
            'opacity-0': !hasScrolled
          }">
          <div class="p-6 text-center">
            <div class=" w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-400">₹ 18/-</h3>
            </div>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-4 border-gray-200 dark:border-gray-700" />
            <p class="mt-2 text-md font-bold text-[#092b62] dark:text-[#6B8F8D] leading-relaxed">
              Intraday
            </p>
          </div>
        </div>

        <!-- Card 2: Derivatives -->
        <div
          class="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-xl overflow-hidden transform hover:-translate-y-1"
          :class="{
            'opacity-100': hasScrolled,
            'opacity-0': !hasScrolled
          }">
          <div class="p-6 text-center">
            <div class=" w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-400">₹ 18/-</h3>
            </div>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-4 border-gray-200 dark:border-gray-700" />
            <p class="mt-2 text-md font-bold text-[#092b62] dark:text-[#6B8F8D] leading-relaxed">
              Derivatives
            </p>
          </div>
        </div>

        <!-- Card 3: Delivery -->
        <div
          class="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-xl overflow-hidden transform hover:-translate-y-1"
          :class="{
            'opacity-100': hasScrolled,
            'opacity-0': !hasScrolled
          }">
          <div class="p-6 text-center">
            <div class=" w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <h3 class="text-4xl font-bold text-green-600 dark:text-green-400">₹ 0/-</h3>
            </div>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-4 border-gray-200 dark:border-gray-700" />
            <p class="mt-2 text-md font-bold text-[#092b62] dark:text-[#6B8F8D] leading-relaxed">
              Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Pricing & Charges
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Transparent and upfront breakdown of our brokerage and additional charges.
        </p>
      </div>

      <!-- Tables Layout -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Table -->
        <div
          class="w-full lg:w-1/2 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th colspan="2" class="py-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
                  Trading Account Processing Charges
                </th>
              </tr>
              <tr>
                <th colspan="2"
                  class="py-2 px-4 text-left text-gray-800 dark:text-gray-100 border-t border-gray-300 dark:border-gray-600">
                  Account Opening:
                  <span class="text-green-600 dark:text-green-400 text-lg font-medium">FREE</span>
                </th>
              </tr>
              <tr>
                <th colspan="2"
                  class="py-2 px-4 text-left text-gray-800 dark:text-gray-100 border-t border-gray-300 dark:border-gray-600">
                  Brokerage
                </th>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-600">
                <th class="py-2 px-4 text-left text-sm text-gray-700 dark:text-gray-300">Segment</th>
                <th class="py-2 px-4 text-left text-sm text-gray-700 dark:text-gray-300">Rate</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-700 dark:text-gray-300">
              <tr v-for="item in brokerageData" :key="item.segment" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="py-2 px-4 border-t border-gray-200 dark:border-gray-600">{{ item.segment }}</td>
                <td class="py-2 px-4 border-t border-gray-200 dark:border-gray-600">{{ item.rate }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Table -->
        <div
          class="w-full lg:w-1/2 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th colspan="2" class="py-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
                  Other Charges
                </th>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-600">
                <th class="py-2 px-4 text-left text-sm text-gray-700 dark:text-gray-300">Services</th>
                <th class="py-2 px-4 text-left text-sm text-gray-700 dark:text-gray-300">Charges</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-700 dark:text-gray-300">
              <tr v-for="item in otherCharges" :key="item.service" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="py-2 px-4 border-t border-gray-200 dark:border-gray-600">{{ item.service }}</td>
                <td class="py-2 px-4 border-t border-gray-200 dark:border-gray-600">{{ item.charge }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>


  <section class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Depository Charges -->
        <div>
          <div class="overflow-x-auto shadow-md rounded-2xl">
            <table class="w-full border border-gray-200 dark:border-gray-700 text-sm md:text-base">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <tr>
                  <th colspan="2" class="py-4 text-center text-xl font-semibold">
                    Depository Charges
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">DP Annual Maintenance Charges (DP AMC)</td>
                  <td class="py-3 px-4">₹ 300/- Per Annum</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">Credit charges</td>
                  <td class="py-3 px-4">NIL</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">Debit charges</td>
                  <td class="py-3 px-4">₹ 18 per transaction per scrip</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Physical Transaction Statement -->
        <div>
          <div class="overflow-x-auto shadow-md rounded-2xl">
            <table class="w-full border border-gray-200 dark:border-gray-700 text-sm md:text-base">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <tr>
                  <th colspan="2" class="py-4 text-center text-xl font-semibold">
                    Physical Transaction Statement
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">By email</td>
                  <td class="py-3 px-4">Free</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">By physical</td>
                  <td class="py-3 px-4">₹ 5/- per page + ₹ 100/- courier charges</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Note -->
      <div class="mt-8 lg:w-2/3">
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          <strong class="font-semibold">Note:</strong> DP AMC will be charged once a year starting the fourth month
          after account opening. No AMC for the first three months.
        </p>
      </div>

      <!-- Additional Charges -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div>
          <div class="overflow-x-auto shadow-md rounded-2xl">
            <table class="w-full border border-gray-200 dark:border-gray-700 text-sm md:text-base">
              <tbody class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">First Delivery Instructions Booklet (5 Leaves)</td>
                  <td class="py-3 px-4">Free</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">Every Additional Booklet (5 Leaves)</td>
                  <td class="py-3 px-4">₹ 54</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">Modification in CML</td>
                  <td class="py-3 px-4">₹ 18 per request</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4">KRA upload and download</td>
                  <td class="py-3 px-4">₹ 36</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">Cheque Bounce Charges</td>
                  <td class="py-3 px-4">₹ 360</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="overflow-x-auto shadow-md rounded-2xl">
            <table class="w-full border border-gray-200 dark:border-gray-700 text-sm md:text-base">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <tr>
                  <th colspan="2" class="py-4 text-center text-xl font-semibold">
                    Transaction Charges (Off market transfer)
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                <tr>
                  <td class="py-3 px-4">Off market transfer</td>
                  <td class="py-3 px-4">₹ 18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- NRI Charges -->
      <div class="mt-12">
        <div class="overflow-x-auto shadow-md rounded-2xl">
          <table class="w-full border border-gray-200 dark:border-gray-700 text-sm md:text-base">
            <thead class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
              <tr>
                <th colspan="3" class="py-4 text-center text-xl font-semibold">
                  Charges: NRI
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="py-3 px-4">Account opening</td>
                <td class="py-3 px-4">₹ 180</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="py-3 px-4">AMC</td>
                <td class="py-3 px-4">₹ 500</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="py-3 px-4">Futures & Options brokerage</td>
                <td class="py-3 px-4">₹ 35 per order</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Equity Cash segment - brokerage</td>
                <td class="py-3 px-4">
                  0.25% or ₹ 200 whichever is lower for delivery.
                  <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">
                    Note: NRI cannot do Intraday in cash. If buying back the same stock on the same day, brokerage is
                    0.50%.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="mt-10">
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          <strong class="font-semibold">Disclaimer:</strong> For delivery trades, a minimum of ₹0.01 per order will be
          charged. Physical contract note recipients will be charged ₹5 per page + ₹100 courier charges. Brokerage of
          0.5% of contract value applies to physical deliveries.
        </p>
      </div>
    </div>
  </section>


  <section class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="border divide-y divide-gray-200 dark:divide-gray-700 rounded-xl shadow-sm overflow-hidden">
        <!-- Accordion Item -->
        <div role="accordion">
          <button @click="toggleAccordion" type="button"
            class="w-full flex justify-between items-center text-left font-semibold px-6 py-5 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-base sm:text-lg md:text-xl">
            <span>Other Charges</span>
            <svg :class="['w-4 h-4 transform transition-transform duration-300', isOpen ? 'rotate-180' : '']"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="text-gray-600 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M12 18.167a2.38 2.38 0 0 1-1.683-.697l-9.52-9.52a2.38 2.38 0 1 1 3.365-3.366L12 13.422l7.837-7.838a2.38 2.38 0 0 1 3.365 3.366l-9.52 9.52a2.38 2.38 0 0 1-1.682.697Z"
                clip-rule="evenodd" />
            </svg>
          </button>

          <transition name="accordion" mode="out-in">
            <div v-show="isOpen"
              class="px-6 py-5 space-y-4 text-sm sm:text-base md:text-lg lg:text-[1.1rem] xl:text-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-950">
              <p>
                Inter-settlement/CUSA to pool /Collateral to pool and MTF to pool transfer: ₹18 per transaction per
                scrip (excluding GST and applicable taxes). The charges will be debited to the trading ledger weekly.
              </p>
              <p>Call Center trades: ₹54 per order if you use our Call Center to execute trades.</p>
              <p>Transaction value: As per Depository rates.</p>
              <p>Statutory and other levies: Separately chargeable as applicable.</p>
              <p>Brokerage on futures expiration/options contracts: ₹36/- per trade for expiry/exercise.</p>
              <p>Auto-squared-off positions: ₹36/- per order for auto square-off.</p>
              <p>E-Sign facilities: ₹11 per use paid by the customer.</p>
              <p>Payment gateway: Up to ₹12/- + GST as charged by the vendor.</p>
              <p>Demat charges for MF transactions: ₹18 exclusive of GST.</p>
              <p>Other services: Will be charged separately.</p>
              <p>
                Revision of charges/service standards: May change at Definedge’s discretion with prior intimation.
              </p>

              <div class="pt-4">
                <ol class="list-decimal pl-6 space-y-2">
                  <li><strong>DP AMC:</strong> ₹1000/year for corporate accounts.</li>
                  <li><strong>Interest on debit:</strong> 0.05% per day on debit/insufficient balance.</li>
                  <li><strong>Penalties:</strong> Applicable if caused by client defaults/errors.</li>
                  <li><strong>Max brokerage:</strong> As per SEBI/exchange regulations.</li>
                  <li><strong>Outstanding bill:</strong> 13% p.a. if unpaid within due date.</li>
                  <li><strong>Tariff changes:</strong> 30-day prior notice for changes.</li>
                </ol>
              </div>

              <p class="pt-4 font-medium">
                Charges are exclusive of GST, STT, stamp duty, and other applicable charges on actual basis.
              </p>
              <p class="font-medium">GST applicable as per government rules.</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isOpen = ref(false);

const hasScrolled = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
const onScroll = () => {
  hasScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

const brokerageData = [
  { segment: 'Equity Delivery', rate: 'Free' },
  { segment: 'Equity Intraday', rate: '0.03% or ₹18 per order (lower)' },
  { segment: 'Equity Futures', rate: '0.03% or ₹18 per order (lower)' },
  { segment: 'Equity Options', rate: '₹18 per order' },
  { segment: 'Currency Futures', rate: '0.03% or ₹18 per order (lower)' },
  { segment: 'Currency Options', rate: '₹18 per order' },
  { segment: 'Commodity Futures', rate: '0.03% or ₹18 per order (lower)' },
  { segment: 'Commodity Options', rate: '₹18 per order' },
  { segment: 'Auction Charges', rate: 'As per Definedge criteria' },
]

const otherCharges = [
  { service: 'Margin Pledge/Closure/Invocation', charge: '₹18' },
  { service: 'SLB Charges', charge: '₹36 + CDSL/NSDL Charges' },
  { service: 'Margin Repledged/Release', charge: '₹2 + CDSL Charges' },
  { service: 'DEMAT - Per Certificate', charge: '₹18 + courier charges' },
  { service: 'REMAT - Per Certificate/100 Units', charge: '₹18' },
  { service: 'Conversion of MF units/Demat SOA', charge: '₹18 + courier charges' },
  { service: 'Reconversion of MF units/Redemption', charge: '₹18' },
  { service: 'Courier charges per request', charge: '₹100' },
  { service: 'Rejection/Failure Entry DRF/Slip', charge: '₹54' },
  { service: 'Pledge creation/Invocation', charge: '₹36' },
  { service: 'Pledge closure', charge: '₹36' },
]
</script>


<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>
