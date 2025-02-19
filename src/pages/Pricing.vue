<template>
  <section
    class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:z-10"
  >
    <img
      src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/common-banner-scaled.jpg"
      alt="Banner Image"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      class="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6"
    >
      <h2 class="text-white sm:text-4xl text-2xl font-bold mb-6">Pricing</h2>
      <ul
        class="flex items-center justify-center font-[sans-serif] space-x-4 mt-4"
      >
        <li
          class="text-gray-300 cursor-pointer text-xl lg:text-base hover:underline"
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
        <li class="text-gray-300 text-xl lg:text-base cursor-pointer">
          Pricing
        </li>
      </ul>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-8">
        <h2 class="lg:text-5xl text-3xl font-bold mb-4">Competitive Pricing</h2>
        <p class="lg:text-2xl text-base text-gray-600 mb-4">
          We are upfront and transparent about our brokerage and pricing.
        </p>
      </div>

      <!-- Flex Container for Cards -->
      <div class="flex flex-wrap justify-center gap-6 py-4">
        <!-- Card Component -->
        <div
          class="bg-gray-50 shadow-md hover:shadow-xl border-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-lg font-[sans-serif] overflow-hidden"
        >
          <!-- Card Content -->
          <div class="p-6 text-center">
            <h3 class="text-4xl font-semibold text-[#092b62]">₹ 18/-</h3>
            <p class="mt-2 text-sm text-gray-500 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-2 border-gray-200" />

            <p class="mt-2 text-md font-bold text-[#092b62] leading-relaxed">
              Intraday
            </p>
          </div>
        </div>

        <!-- Repeat Card for other Pricing options -->
        <div
          class="bg-gray-50 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-lg font-[sans-serif] overflow-hidden"
        >
          <!-- Card Content -->
          <div class="p-6 text-center">
            <h3 class="text-4xl font-semibold text-[#092b62]">₹ 18/-</h3>
            <p class="mt-2 text-md text-gray-500 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-2 border-gray-200" />
            <p class="mt-2 text-md text-[#092b62] font-bold leading-relaxed">
              Derivatives
            </p>
          </div>
        </div>

        <!-- Repeat Card for other Pricing options -->
        <div
          class="bg-gray-50 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 rounded-lg font-[sans-serif] overflow-hidden"
        >
          <!-- Card Content -->
          <div class="p-6 text-center">
            <h3 class="text-4xl font-semibold text-[#092b62]">₹ 0/-</h3>
            <p class="mt-2 text-sm text-gray-500 leading-relaxed">
              (Per Order)
            </p>
            <hr class="my-2 border-gray-200" />

            <p class="mt-2 text-sm font-bold text-[#092b62] leading-relaxed">
              Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col sm:flex-row gap-8">
        <!-- Left Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Trading Account Processing Charges
                </th>
              </tr>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 py-2 text-left px-4"
                >
                  Account Opening:
                  <span class="text-green-600 text-lg">FREE</span>
                </th>
              </tr>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 py-2 text-left px-4"
                >
                  Brokerage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="border-b border-gray-300 text-left py-2 px-4">
                  Segment
                </th>
                <th class="border-b border-gray-300 text-left py-2 px-4">
                  Rate
                </th>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Equity Delivery
                </td>
                <td class="border-b border-gray-300 py-2 px-4">Free</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Equity Intraday
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  0.03% or ₹ 18 per executed order whichever is lower
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Equity Futures
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  0.03% or ₹ 18 per executed order whichever is lower
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Equity Options
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 per executed order
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Currency Futures
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  0.03% or ₹ 18 per executed order whichever is lower
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Currency Options
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 per executed order
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Commodity Futures
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  0.03% or ₹ 18 per executed order whichever is lower
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Commodity Options
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 per executed order
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Auction Charges
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  As per Definedge Securities Auction process criteria
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Other Charges
                </th>
              </tr>
              <tr>
                <th class="border-b border-gray-300 py-2 text-left px-4">
                  Services
                </th>
                <th class="border-b border-gray-300 py-2 text-left px-4">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Margin Pledge/Closure/Invocation
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 18</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">SLB Charges</td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 36 + CDSL/NSDL Charges
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Margin Repledged/Release of Margin Repledged
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 2 + CDSL Charges
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  DEMAT - Per Certificate
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 + courier charges
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  REMAT - Per Certificate OR Per 100 Units/shares (Whichever is
                  higher)
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 18</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Conversion of MF units/Dematerialisation Per SOA
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 + courier charges
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Reconversion of MF units to SOA or Redemption/Restatement Per
                  SOA
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 18</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Courier charges per request shall be charged separately
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 100</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Rejection/Failure Entry-DRF/Instruction slip per entry
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 54</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Pledge creation/Invocation
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 36</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Pledge closure
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 36</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col sm:flex-row gap-8">
        <!-- Left Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Depository Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  DP Annual Maintenance Charges (DP AMC)
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 300/- Per Annum
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Credit charges
                </td>
                <td class="border-b border-gray-300 py-2 px-4">NIL</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Debit charges
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 per transaction per scrip
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Physical Transaction Statement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">By email</td>
                <td class="border-b border-gray-300 py-2 px-4">Free</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">By physical</td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 5/- per page + ₹ 100/- courier charges
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-full lg:w-1/2 py-12">
        <p class="text-gray-500">
          <strong>Note:</strong> DP AMC would be charged once a year in the
          fourth month after the opening of the account. There will be no AMC
          charges for the first three months.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-8">
        <!-- Left Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <tbody>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  First Delivery Instructions Booklet (5 Leaves)
                </td>
                <td class="border-b border-gray-300 py-2 px-4">Free</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Every Additional Booklet (5 Leaves)
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 54</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Modification in CML
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 18 per request
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  KRA upload and download
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 36</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Cheque Bounce Charges
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 360</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Table -->
        <div class="w-full sm:w-1/2">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <tbody>
              <tr>
                <th
                  colspan="2"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Transaction Charges (Off market transfer)
                </th>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Off market transfer
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row py-8">
        <div class="w-full sm:w-full">
          <table
            class="min-w-full table-auto border-collapse border border-gray-200"
          >
            <tbody>
              <tr>
                <th
                  colspan="3"
                  class="border-b border-gray-300 text-center py-4 text-xl font-semibold bg-gray-100"
                >
                  Charges: NRI
                </th>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Account opening
                </td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 180</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">AMC</td>
                <td class="border-b border-gray-300 py-2 px-4">₹ 500</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Futures & Options brokerage
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  ₹ 35 per order
                </td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 py-2 px-4">
                  Equity Cash segment - brokerage
                </td>
                <td class="border-b border-gray-300 py-2 px-4">
                  0.25% or ₹ 200 whichever is lower for delivery.
                  <span class="block text-sm text-gray-500"
                    >Note: NRI cannot do Intraday in cash, but in a scenario
                    where he sells existing stock and buys the same stock for
                    Delivery, then he should get charged 0.50% brokerage.</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-full lg:w-full py-12">
        <div class="text-left text-gray-500">
          <strong class="font-semibold">Disclaimer:</strong>
          For Delivery based trades, a minimum of Rs. 0.01 will be charged per
          order. Clients who opt to receive physical contract notes will be
          charged ₹ 5/- per page + ₹ 100/- courier charges. A brokerage of 0.5%
          of the contract value will be charged for contracts where physical
          delivery happens.
        </div>
      </div>
    </div>
  </section>

  <section class="pb-16">
    <div class="container mx-auto px-4">
      <div class="font-[sans-serif] border divide-y rounded-lg">
        <!-- Single Accordion Item -->
        <div role="accordion">
          <button
            type="button"
            class="w-full text-base text-left font-semibold p-5 text-gray-600 border-b flex items-center transition-all"
            @click="toggleAccordion"
          >
            <span class="mr-4">Other Charges</span>
            <svg
              :class="isOpen ? 'rotate-180' : ''"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 fill-current ml-auto shrink-0 transform transition-all"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div v-show="isOpen" class="py-4 px-6">
            <p class="text-gray-500">
              Inter-settlement/CUSA to pool /Collateral to pool and MTF to pool
              transfer: ₹ 18 per transaction per scrip (excluding GST and
              applicable taxes). The charges will be debited to the trading
              ledger on a weekly basis.
            </p>
            <p class="text-gray-500">
              Call Center trades: ₹ 54 per order if you use our Call Center to
              execute trades.
            </p>
            <p class="text-gray-500">
              Transaction value: Value of the transaction will be in accordance
              with rates provided by the Depository.
            </p>
            <p class="text-gray-500">
              Statutory and other levies: Charges related to execution and/or
              settlement of transactions shall be separately chargeable as
              applicable.
            </p>
            <p class="text-gray-500">
              Brokerage on futures expiration and option contracts: ₹ 36/- per
              trade for expiry of futures and exercise/assignment of option
              contracts.
            </p>
            <p class="text-gray-500">
              Auto-squared-off positions: ₹ 36/- per order for positions auto
              squared off by DSBPL.
            </p>
            <p class="text-gray-500">
              E-Sign facilities: ₹ 11 for availing of E-Sign facilities shall be
              paid by the customer.
            </p>
            <p class="text-gray-500">
              Payment gateway charges: Up to ₹ 12/- + GST transaction, payable
              by the customer as charged by the payment gateway vendor to DSBPL.
            </p>
            <p class="text-gray-500">
              Demat charges for MF transactions: Processing of Direct Mutual
              Fund transactions will be charged at ₹ 18 exclusive of GST.
            </p>
            <p class="text-gray-500">
              Charges for other services: Any services availed other than those
              listed above will be charged separately.
            </p>
            <p class="text-gray-500">
              Revision of charges/service standards: Charges/Service standards
              are subject to revision at the sole discretion of Definedge
              Securities Broking Private Limited, after due intimation to the
              customer over E-mail/SMS or other notifications.
            </p>

            <div class="mt-6">
              <ol class="list-decimal pl-5 text-gray-500">
                <li class="font-semibold">
                  <strong>DP AMC:</strong> ₹ 1000 per annum for corporate
                  accounts.
                </li>
                <li class="font-semibold">
                  <strong>Interest on debit balance:</strong> Interest @ 0.05%
                  per day will be charged on the debit balance/insufficient
                  funds in the ledger account.
                </li>
                <li class="font-semibold">
                  <strong>Penalties:</strong> Penalties charged by
                  Exchanges/SEBI/Any Regulatory Authorities will only be charged
                  due to Clients Defaults/Errors/Violations.
                </li>
                <li class="font-semibold">
                  <strong>Maximum brokerage:</strong> The stock broker shall not
                  charge more than the maximum brokerage permissible as per
                  exchange or SEBI regulations.
                </li>
                <li class="font-semibold">
                  <strong>Outstanding bill amount:</strong> Interest @ 13% p.a.
                  will be charged on the outstanding bill amount if not paid
                  within the due date for DP debits.
                </li>
                <li class="font-semibold">
                  <strong>Tariff changes:</strong> The above tariff is subject
                  to change. Changes, if any, will be intimated 30 days in
                  advance.
                </li>
              </ol>
            </div>

            <p class="mt-4 font-semibold text-gray-500">
              The above charges are exclusive of GST, Securities Transaction
              Tax, other charges, and stamp duty, if applicable, and the same
              shall be charged to the Client’s account on an actual basis.
            </p>
            <p class="font-semibold text-gray-500">
              GST charges are applicable as per government regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
