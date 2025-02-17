<template>
    <section
        class="bg-white dark:bg-gray-900 bg-cover bg-center h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
        style="background-image: url('https://www.definedgesecurities.com/wp-content/uploads/2025/02/definedge-banner-scaled.webp');">

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10 ">
            <!-- Flex container for centering content vertically and horizontally -->
            <div class="mr-auto place-self-center py-16 lg:col-span-7 text-white px-4 flex flex-col ">
                <!-- Title with responsive text sizes -->
                <h1
                    class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl">
                    All-in-One Investing & Trading Ecosystem
                </h1>
                <!-- Paragraph with responsive text sizes -->
                <p class="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl xl:text-2xl">
                    Open <span class="text-yellow-500"> Free </span> Super Demat account
                </p>
                <!-- Form section -->
                <div class="flex justify-center">
                    <form action="/#wpcf7-f29499-p30911-o1" method="post" class="w-full mx-auto">
                        <div class="flex items-center gap-3">
                            <!-- Phone number input -->
                            <div class="flex w-full lg:w-auto sm:w-auto md:w-auto">
                                <input type="text" name="text-million-2" id="text-million-2"
                                    class="w-12 p-2 border border-gray-300 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    value="+91" readonly="readonly" aria-invalid="false"
                                    style="background: linear-gradient(180deg, #FFFFFF20 0%, #FFFFFF10 100%)">
                                <input type="tel" name="million-number" id="million-number"
                                    class="w-full p-2 border rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter Mobile Number" value="" required aria-required="true"
                                    aria-invalid="false"
                                    style="background: linear-gradient(180deg, #FFFFFF20 0%, #FFFFFF10 100%)">
                            </div>
                            <!-- Submit Button -->
                            <div>
                                <button type="submit"
                                    class="p-2 w-28 bg-primary-700 text-white rounded-[5px] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gray-800">
        <div class="max-w-screen-xl mx-auto px-4">
            <!-- Flex container for both sections -->
            <div class="flex justify-between items-center ">
                <!-- Trusted by section -->
                <div class="text-center">
                    <p class="text-lg text-gray-300">
                        Trusted by <strong class="text-white text-xl">2.3 million</strong> Users &amp; Counting
                    </p>
                </div>

                <!-- Coming Soon Announcement Section -->
                <div class="text-center py-6 px-4  rounded-md">
                    <div class="text-xl font-semibold text-white">
                        <span>Coming Soon : </span>
                        <span class="text-primary-500 blink-text"> Super Algo Trader </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative bg-gray-900 text-white flex justify-center items-center pt-12"
        style="background-image: linear-gradient(100deg, #26282C 0%, #131416 100%);">
        <div class="max-w-screen-xl mx-auto px-4">
            <!-- Section Title -->
            <p class="text-blue-500 text-center text-lg font-bold">APPS</p>
            <h5 class="text-white text-center text-3xl font-extrabold mt-4">
                Ecosystem That Brings Markets to Your Fingertips
            </h5>

            <!-- Tabs Container -->
            <div class="flex justify-center mt-8 mb-6 gap-x-6">
                <!-- Tab Buttons -->
                <button @click="activeAppTab = 'ZoneApp'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeAppTab === 'ZoneApp',
                    'bg-gray-300 border-blue-500 text-gray-700': activeAppTab !== 'ZoneApp'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
                    Zone App
                </button>
                <button @click="activeAppTab = 'OPSTRAApp'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeAppTab === 'OPSTRAApp',
                    'bg-gray-300 border-blue-500 text-gray-700': activeAppTab !== 'OPSTRAApp'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
                    OPSTRA App
                </button>
            </div>

            <!-- Tab Content -->
            <div class="flex items-center justify-center space-x-12">
                <!-- Zone App Content -->
                <div v-if="activeAppTab === 'ZoneApp'" class="w-full md:w-full px-6">

                    <div class="flex flex-wrap justify-between">

                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                Learn, Analyze & Trade Effortlessly Anytime, Anywhere
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Powerful Technical & Fundamental Scanners for smarter stock selection</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Comprehensive Stock Reports with in-depth technical and fundamental
                                    insights</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Instant Analysis & Lightning-Fast Order Execution across all order types</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Education, Mutual Fund Analysis, IPO Insights, Smart Alerts & More</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Strategy-Based Orders, Holding Insights & Tools for Disciplined Investing</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>

                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank" class="">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank" class="">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Zone.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>


                </div>

                <!-- OPSTRA App Content -->
                <div v-if="activeAppTab === 'OPSTRAApp'" class="w-full md:w-full px-6">

                    <div class="flex flex-wrap justify-between">
                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                India’s Most Loved Options Platform, Now in An App
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Trade Directly from Strategy Builder</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Get PayOff Charts for all your Live positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Ease of adjustments directly from Positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Find more opportunities. Trade in MCX & BFO too</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze unlimited Open positions</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>

                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank" class="">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank" class="">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Opstra-1024x1024.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>

    <section class="relative text-white flex justify-center items-center pt-12"
        style="background-image: linear-gradient(312deg, #1E50D14D 0%, #31C19D4D 100%); background-color: transparent;">
        <div class="max-w-screen-xl mx-auto px-4">
            <!-- Section Title -->
            <h2 class="text-[#005BDF] text-center text-lg ">TRADE & INVEST</h2>
            <h5 class="text-white text-center text-3xl font-extrabold mt-4">
                Ecosystem of Effortless Trading
            </h5>

            <!-- Tabs Container -->
            <div class="flex justify-center mt-8 mb-6 gap-x-6">
                <!-- Tab Buttons -->
                <button @click="activeTradeTab = 'optionsTab'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeTradeTab === 'optionsTab',
                    'bg-gray-300 border-blue-500 text-gray-700': activeTradeTab !== 'optionsTab'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
                    Options Trading Platform
                </button>
                <button @click="activeTradeTab = 'webPlatformTab'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeTradeTab === 'webPlatformTab',
                    'bg-gray-300 border-blue-500 text-gray-700': activeTradeTab !== 'webPlatformTab'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
                    Web Platform
                </button>
                <button @click="activeTradeTab = 'DesktopApplication'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeTradeTab === 'DesktopApplication',
                    'bg-gray-300 border-blue-500 text-gray-700': activeTradeTab !== 'DesktopApplication'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">

                    Desktop Application
                </button>
                <button @click="activeTradeTab = 'UniqueAlertSystem'" :class="{
                    'border-b-2 border-blue-500 bg-white text-gray-800': activeTradeTab === 'UniqueAlertSystem',
                    'bg-gray-300 border-blue-500 text-gray-700': activeTradeTab !== 'UniqueAlertSystem'
                }"
                    class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
                    Unique Alert System
                </button>
            </div>

            <!-- Tab Content -->
            <div class="flex items-center justify-center space-x-12">
                <!-- Options Trading Platform Content -->
                <div v-if="activeTradeTab === 'optionsTab'" class="w-full md:w-full px-6">
                    <div class="flex flex-wrap justify-between">
                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                Learn, Analyze & Trade Effortlessly Anytime, Anywhere
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Powerful Technical & Fundamental Scanners for smarter stock selection</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Comprehensive Stock Reports with in-depth technical and fundamental
                                    insights</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Instant Analysis & Lightning-Fast Order Execution across all order types</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Education, Mutual Fund Analysis, IPO Insights, Smart Alerts & More</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Strategy-Based Orders, Holding Insights & Tools for Disciplined Investing</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>
                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Zone.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>

                <!-- Web Platform Content -->
                <div v-if="activeTradeTab === 'webPlatformTab'" class="w-full md:w-full px-6">
                    <div class="flex flex-wrap justify-between">
                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                India’s Most Loved Options Platform, Now in An App
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Trade Directly from Strategy Builder</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Get PayOff Charts for all your Live positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Ease of adjustments directly from Positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Find more opportunities. Trade in MCX & BFO too</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze unlimited Open positions</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>
                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Opstra-1024x1024.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>

                <div v-if="activeTradeTab === 'DesktopApplication'" class="w-full md:w-full px-6">
                    <div class="flex flex-wrap justify-between">
                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                Desktop Application
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Trade Directlyss from Strategy Builder</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Get PayOff Charts for all your Live positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Ease of adjustments directly from Positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Find more opportunities. Trade in MCX & BFO too</span>
                            </li>

                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze unlimited Open positions</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>
                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Opstra-1024x1024.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
                
                <div v-if="activeTradeTab === 'UniqueAlertSystem'" class="w-full md:w-full px-6">
                    <div class="flex flex-wrap justify-between">
                        <ul class="space-y-4 text-lg w-full md:w-1/2">
                            <h6 class="text-xl font-extrabold mb-4 text-left">
                                Unique Alert System
                            </h6>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Trade Unique Alert System from Strategy Builder</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Get PayOff Charts for all your Live positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Ease of adjustments directly from Positions</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Find more opportunities. Trade in MCX & BFO too</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze unlimited Open positions</span>
                            </li>
                            <li class="flex items-start">
                                <h6 class="text-xl font-extrabold mb-4 text-start">
                                    Download the App Now
                                </h6>
                            </li>
                            <li class="flex items-start">
                                <div class="flex space-x-4 justify-start">
                                    <a href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                                            alt="Google Play Store" />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                                        target="_blank">
                                        <img class=""
                                            src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                                            alt="Apple App Store" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="w-full md:w-1/2 mt-8">
                            <img src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Opstra-1024x1024.webp"
                                alt="App Image" class="w-[80%] rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const state = reactive({
            activeAppTab: 'ZoneApp',
            activeTradeTab: 'optionsTab',
        });

        return {
            ...toRefs(state),
        };
    },
};
</script>

<style scoped>
section {
    position: relative;
}

section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
}

@keyframes blink {
    0% {
        color: white;
    }

    50% {
        color: gray;
    }

    100% {
        color: white;
    }
}

/*    */
.blink-text {
    animation: blink 3s infinite;
}

input[type="radio"]:checked+label {
    color: #fff;
    border-bottom: 2px solid #fff;
}

/* Show content based on selected tab using the `peer` selector */
input[type="radio"]:checked~.tab-item {
    display: none;
}

input[type="radio"]:checked+label+.tab-item {
    display: block;
}
</style>
