<template>
  <footer class="bg-gray-900 dark:bg-gray-800 pt-12 pb-6 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
    <div class="lg:container mx-auto lg:px-6">
      <div class="flex items-center lg:justify-between sm:justify-center flex-wrap gap-8">
        <!-- Left: Logo -->
        <div class="flex justify-center md:justify-start w-full sm:w-full md:w-auto mb-4 md:mb-0">
          <img src="https://www.definedgesecurities.com/wp-content/uploads/2022/02/definedge-logo.png" alt="Logo"
            class="lg:w-auto md:w-auto" />
        </div>

        <!-- Center: App download buttons -->
        <div class="flex space-x-4 justify-center w-full md:w-auto mb-4 md:mb-0">
          <a href="https://play.google.com/store/apps/details?id=com.definedge.zone&amp;pli=1" target="_blank">
            <img src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/Google-Play-Store-badge.png"
              alt="Google Play Store" class="w-auto" />
          </a>
          <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110" target="_blank">
            <img src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/App-Store-Apple-Logo.png"
              alt="App Store" class="w-auto" />
          </a>
        </div>

        <!-- Right: Social Media Icons -->

        <div class="flex justify-center space-x-4 w-full md:w-auto">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener"
            class="text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors">
            <img :src="social.icon" :alt="social.name" class="h-7 w-7" />
          </a>
        </div>
      </div>

      <hr class="my-12 border-gray-400" />

      <div class="flex flex-wrap">
        <!-- Definedge Securities Broking Pvt. Ltd Section -->
        <div class="w-full sm:w-1/2 lg:w-1/4 mt-8">
          <h4 class="text-gray-400 font-semibold text-base mb-6">
            Definedge Securities Broking Pvt. Ltd.
          </h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">Member of NSE, BSE & MCX :-</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">SEBI Registration No. INZ000301132</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">Membership No.: NSE-90237 | BSE-6766 |
                MCX-56960</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">SEBI Registration No.: CDSL-IN-DP-662-2021</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">Membership No.: CDSL-12094700</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">NSE CM Code: M70017</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">AMFI Registration no. ARN: 206385</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">Research Analyst: INH000010344</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">CIN : U65990PN2021PTC198378</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-white">Compliance Officer: Ms. Bhagyashree Zad,</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-blue-500">Email: compliance@definedge.com,</a>
            </li>
            <li>
              <a href="javascript:void(0)" class=" hover:text-blue-500">Tel no.: 020-22953395</a>
            </li>
            <li>
              <a class=" hover:text-blue-500" href="#" style="cursor: pointer">Investor Grievance Redressal
                Mechanism</a>
            </li>
            <li>
              <a class=" hover:text-blue-500" href="https://www.definedgesecurities.com/investor-awareness/">Investor’s
                Attention</a>
            </li>
            <li>
              <a class=" hover:text-blue-500" href="https://www.definedgesecurities.com/pdf/NSE-Risk-disclosure.pdf"
                target="_blank" rel="noopener">Risk Disclosures on Derivatives</a>
            </li>
            <li>
              <a class=" hover:text-blue-500" href="https://www.definedgesecurities.com/pdf/NSE-LIST-OF-AP.pdf"
                target="_blank" rel="noopener">AP Details</a>
            </li>
          </ul>
        </div>

        <!-- Registered Address -->
        <div class="w-full sm:w-1/2 lg:w-1/3 lg:px-8 mt-8">
          <h4 class="text-gray-400 font-semibold text-base mb-6">
            Registered Address
          </h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a class=" hover:text-white"
                href="https://maps.google.com/maps?ll=18.520911,73.778207&amp;z=13&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;cid=12577676570181016861"
                target="_blank" rel="noopener"><i class="fa fa-map-marker"></i> 2<sup>nd</sup> floor,
                Ambashish, Lane – 9, Pakharbag, Bavdhan, Pune, Maharashtra –
                411021</a>
            </li>
            <li>
              <a class=" hover:text-white" href="mailto:care@definedge.com"><i class="fa fa-envelope"></i>
                care@definedge.com</a>
            </li>
            <li>
              <a class=" hover:text-white" href="tel:02061923200"><i class="fa fa-phone-alt"></i> 020-61923200</a>
            </li>
            <hr class="my-12 border-gray-400" />
            <li class="text-base font-semibold">
              <a href="javascript:void(0)" class="text-gray-400">Corporate office</a>
            </li>
            <li class="leading-8">
              <a href="javascript:void(0)" class=" hover:text-white">
                <p class="xmsonormal">
                  <i class="fa fa-map-marker"></i> Office no. 523, 5<sup>th</sup>
                  Floor, Chintamani Plaza, Andheri – Kurla Road, Near WEH Metro
                  Station, Andheri – East, Mumbai – 400099
                </p>
              </a>
            </li>
            <li>
              <a class=" hover:text-blue-400" href="mailto:compliance@definedge.com"><i class="fa fa-envelope"></i>
                compliance@definedge.com</a>
            </li>
            <li>
              <a class=" hover:text-blue-400" href="tel:02022953395"><i class="fa fa-phone-alt"></i> 020-22953395</a>
            </li>
            <hr class="my-12 border-gray-400" />
            <li class="flex flex-wrap font-semibold">
              <span class="flex lg:gap-8 gap-4 flex-wrap text-gray-400">
                Customer Support
                <a class="text-gray-400 hover:text-blue-400" href="tel:02061923200"><i class="fa fa-phone-alt"></i>
                  020-61923200</a>
              </span>
            </li>
            <li class="flex flex-wrap font-semibold">
              <span class="flex lg:gap-8 gap-4 flex-wrap text-gray-400">
                Call and trade
                <a class="text-gray-400 hover:text-blue-400" href="tel:02061923220"><i class="fa fa-phone-alt"></i>
                  020-61923220</a>
              </span>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="w-full sm:w-1/2 lg:w-1/5 mt-8">
          <h4 class="text-gray-400 font-semibold text-lg mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="link in quickLinks" :key="link.text">
              <a :href="link.url" class="hover:text-white dark:hover:text-blue-400 transition-colors"
                :target="link.external ? '_blank' : ''" :rel="link.external ? 'noopener' : ''">
                {{ link.text }}
              </a>
            </li>
          </ul>

        </div>

        <!-- Services Section -->
        <div class="w-full sm:w-1/2 lg:w-1/5 sm:mt-8 mt-8">
          <h4 class="text-gray-400 font-semibold text-lg mb-4">Services</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="service in services" :key="service.text">
              <a :href="service.url" class="hover:text-white dark:hover:text-blue-400 transition-colors" target="_blank"
                rel="noopener">
                {{ service.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="my-6 border-gray-400" />

      <div class="mt-8">
        <div @click="toggleDisclaimer" class="flex justify-center cursor-pointer group">
          <div class="flex flex-col items-center">
            <span class="text-gray-400 text-sm mb-1 group-hover:text-white transition-colors">
              {{ isDisclaimerVisible ? 'Hide' : 'Show' }} Important Information
            </span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400 group-hover:text-white transition-colors transform transition-transform duration-300"
              :class="{ 'rotate-180': isDisclaimerVisible }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
          </div>
        </div>

        <div v-if="isDisclaimerVisible" class="mt-4 p-4 bg-gray-800 dark:bg-gray-700 rounded-lg">
          <div class="text-sm text-gray-300 space-y-4">
            <p v-for="(item, index) in disclaimerText" :key="index">
              <!-- If there's a label and URL -->
              <template v-if="item.url && item.label">
                {{ item.text }}
                <a :href="item.url" target="_blank" rel="noopener" class="text-blue-400 underline hover:text-white">
                  {{ item.label }}
                </a>.
              </template>

              <!-- If there's an email -->
              <template v-else-if="item.email">
                {{ item.text }}
                <a :href="'mailto:' + item.email" class="text-blue-400 underline hover:text-white">
                  {{ item.email }}
                </a>.
              </template>

              <!-- Otherwise plain text -->
              <template v-else>
                {{ item.text }}
              </template>
            </p>
          </div>
        </div>
      </div>


      <div
        class="border-t text-center border-[#6b5f5f] pt-4 mt-8 flex justify-between items-center flex-col-reverse sm:flex-row">
        <p class="text-gray-400 text-[15px]">
          © {{ currentYear }} Definedge Securities Broking Pvt. Ltd. | All
          Rights Reserved
        </p>
        <div @click="scrollToTop" class="cursor-pointer p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor"
            class="bi bi-arrow-up text-gray-400 border-2 border-b-gray-300 rounded-full" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M8 12.5a.5.5 0 0 1-.5-.5V3.707L3.354 8.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1-.708.708L8.5 3.707V12a.5.5 0 0 1-.5.5z" />
          </svg>
        </div>
      </div>
    </div>
    <!-- Marquee Notice -->
    <div class="mt-6 bg-gray-800 dark:bg-gray-700 p-3 rounded-lg overflow-hidden">
      <div class="whitespace-nowrap animate-marquee">
        <span class="text-gray-300 text-sm inline-block mx-4" v-for="(notice, index) in marqueeNotices" :key="index">
          {{ notice }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentYear = new Date().getFullYear();

    const isDisclaimerVisible = ref(false);


    const socialLinks = [
      { name: 'Facebook', url: 'https://www.facebook.com/DefinedgeSecurities/', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/Facebook.svg' },
      { name: 'Instagram', url: 'https://www.instagram.com/Definedge_/', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/Instagram.svg' },
      { name: 'LinkedIn', url: 'https://in.linkedin.com/company/definedge', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/LinkedIn.svg' },
      { name: 'Threads', url: 'https://www.threads.net/@definedge_', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/Threads.svg' },
      { name: 'Twitter', url: 'https://twitter.com/Definedge', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/X.svg' },
      { name: 'YouTube', url: 'https://www.youtube.com/c/DefinedgeSolutions', icon: 'https://www.definedgesecurities.com/wp-content/uploads/2023/07/YouTube.svg' }
    ];

    const quickLinks = [
      { text: 'About Us', url: 'https://www.definedgesecurities.com/about/' },
      { text: 'Products Plans Packages', url: 'https://www.definedgesecurities.com/products-plans-packages/' },
      { text: 'Career', url: 'https://www.definedgesecurities.com/career/' },
      { text: 'Contact Us', url: 'https://www.definedgesecurities.com/contact/' },
      { text: 'Our Team', url: 'https://www.definedgesecurities.com/about/#meet-d-team' },
      { text: 'FAQs', url: 'https://www.definedgesecurities.com/need-help/' },
      { text: 'Privacy Policy', url: 'https://www.definedgesecurities.com/privacy-policy/', external: true },
      { text: 'Terms of Use', url: 'https://www.definedgesecurities.com/terms-and-conditions/', external: true },
      { text: 'Policies & Procedures', url: 'https://www.definedgesecurities.com/policies-procedures/', external: true },
      { text: 'Disclaimer', url: 'https://www.definedgesecurities.com/disclaimer/', external: true },
      { text: 'Rights & Obligations', url: 'https://www.definedgesecurities.com/pdf/Rights-and-Obligations-Definedge-Securities.pdf', external: true },
      { text: 'Investor Charter – Stock Broker / DP', url: 'https://www.definedgesecurities.com/pdf/Investor-Charter.pdf', external: true },
      { text: 'Research Analyst', url: 'https://www.definedgesecurities.com/research-analyst/' },
      { text: 'Voluntary Account Freeze/Block Policy', url: 'https://www.definedgesecurities.com/pdf/Voluntary-Account-FreezeBlock-Policy.pdf', external: true },
      { text: 'Procedure for filing complaints', url: 'https://www.definedgesecurities.com/pdf/Procedure-for-filing-complaints.pdf', external: true },
      { text: 'Bank Details', url: 'https://www.definedgesecurities.com/pdf/Client-Bank-Account.pdf', external: true },
      { text: 'e-Voting', url: 'https://evoting.cdslindia.com/Evoting/EvotingLogin', external: true },
      { text: 'KMP Details', url: 'https://www.definedgesecurities.com/pdf/KMP_details.pdf', external: true },
      { text: 'Trading Holidays', url: 'https://www.definedgesecurities.com/trading-holidays-year-2025/' },
    ];


    const services = [
      { text: 'Mutual Funds', url: 'https://mfzone.definedgesecurities.com/' },
      { text: 'Equity Trading', url: 'https://zone.definedgesecurities.com/' },
      { text: 'Commodity Trading', url: 'https://opstra.definedgesecurities.com/' },
      { text: 'Currency Trading', url: 'https://opstra.definedgesecurities.com/' },
      { text: 'Derivatives Trading', url: 'https://opstra.definedgesecurities.com/' },
      { text: 'Brokerage Charges', url: 'https://www.definedgesecurities.com/pricing-page/' },
      { text: 'IPO', url: 'https://ipo.definedgesecurities.com/' },
      { text: 'Download Forms', url: 'https://www.definedgesecurities.com/download-form/' }
    ];

    const disclaimerText = [
      {
        text: 'For any complaints pertaining to securities broking and DP please write to',
        email: 'care@definedge.com',
      },
      {
        text: 'Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.',
        url: 'https://scores.sebi.gov.in',
        label: 'SEBI SCORES',
        external: true,
      },
      {
        text: 'ODR Portal: The investor/client can also initiate dispute resolution through the ODR Portal.',
        url: 'https://smartodr.in/login',
        label: 'ODR Portal',
        external: true,
      },
      {
        text: 'Benefits: Effective Communication, Speedy redressal of the grievances',
      },
      {
        text: 'Disclaimer: Investment in securities market are subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limit.',
      },
      {
        text: 'Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.',
      },
      {
        text: 'Investors / Traders need to be aware of the risk in the following:',
      },
      {
        text: 'a) Sharing of trading credentials – login id & passwords including OTPs.',
      },
      {
        text: 'b) Trading in leveraged products like options without proper understanding, which could lead to losses.',
      },
      {
        text: 'c) Writing/ selling options or trading in option strategies based on tips, without basic knowledge & understanding of the product and its risks.',
      },
      {
        text: 'd) Dealing in unsolicited tips through Whatsapp, Telegram, YouTube, Facebook, SMS, calls, etc.',
      },
      {
        text: 'e) Trading in "Options" based on recommendations from unauthorised / unregistered investment advisors and influencers.',
      },
      {
        text: 'Prevent unauthorised transactions in your demat account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.',
      },
      {
        text: 'KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.',
      },
      {
        text: 'Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.',
      },
    ];


    const marqueeNotices = [
      '1. Prevent unauthorised transactions in your Demat/Trading account. Update your mobile numbers/email IDs with your DP/Stockbroker.',
      '2. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary, you need not undergo the same process again.',
      '3. Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form.'
    ];


    const toggleDisclaimer = () => {
      isDisclaimerVisible.value = !isDisclaimerVisible.value;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


    return {
      currentYear,
      isDisclaimerVisible,
      socialLinks,
      quickLinks,
      services,
      disclaimerText,
      marqueeNotices,
      toggleDisclaimer,
      scrollToTop,
    };
  },
};
</script>

<style scoped>
/* Marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 30s linear infinite;
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Dark mode transitions */
.dark .dark\:filter {
  filter: brightness(0) invert(1);
}


.blinking-arrow {
  animation: moveDown 2s infinite, rotate 2s infinite, blink 1s infinite;
}

@keyframes moveDown {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }

}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
