<template>
    <section class="relative bg-white dark:bg-gray-900 overflow-hidden">
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 z-0">
        </div>

        <!-- Decorative elements -->
        <div class="absolute right-0 top-0 w-1/2 h-full bg-blue-100 dark:bg-gray-800 z-0"></div>
        <div
            class="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply dark:mix-blend-overlay opacity-20 dark:opacity-10">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left content -->
                <div class="text-left">
                    <h1
                        class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Zone Web
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                            Trading Terminal
                        </span>
                    </h1>

                    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                        Discover a new level of excellence with our innovative web trading platform. Experience seamless
                        and efficient trading & investing, empowering you to unlock your full potential.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <button
                            class="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <span
                                class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span class="relative flex items-center justify-center">
                                <span>Zone Web Login</span>
                                <svg class="ml-2 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>

                        <button
                            class="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Learn More
                        </button>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-6">
                        <div class="flex items-center space-x-2">
                            <svg class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm text-gray-600 dark:text-gray-300">Real-time Data</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm text-gray-600 dark:text-gray-300">Advanced Charts</span>
                        </div>
                    </div>
                </div>

                <!-- Right Image Section -->
                <div class="relative lg:flex justify-center hidden">
                    <div class="relative w-full max-w-md xl:max-w-lg">
                        <!-- Main image -->
                        <div class="relative z-10 rounded-xl overflow-hidden shadow-2xl">

                            <img :src="zoneImg" alt="Trading Platform Interface" class="w-full h-auto object-cover" />
                        </div>

                        <!-- Floating card 1 -->
                        <div
                            class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 w-48">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <svg class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900 dark:text-white">Fast Execution</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">99.9% uptime</p>
                                </div>
                            </div>
                        </div>

                        <!-- Floating card 2 -->
                        <div
                            class="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 w-48">
                            <div class="flex items-center space-x-3">
                                <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <svg class="h-5 w-5 text-green-600 dark:text-green-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900 dark:text-white">Secure Platform</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">Bank-level security</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <div class="flex justify-center py-8 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
            <!-- Card 1 -->
            <div
                class="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://www.definedgesecurities.com/wp-content/uploads/2023/05/Zone-Web-Product-Page-Design-07.png"
                    alt="Free Access" class="w-12 h-12 object-contain" />
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Free Access</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">With our Demat Account</p>
                </div>
            </div>
            

            <!-- Card 2 -->
            <div
                class="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://www.definedgesecurities.com/wp-content/uploads/2023/05/Zone-Web-Product-Page-Design-08.png"
                    alt="350+ Tools" class="w-12 h-12 object-contain" />
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">350+</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Unique Tools, Indicators & Patterns</p>
                </div>
            </div>

            <!-- Card 3 -->
            
            <div
                class="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://www.definedgesecurities.com/wp-content/uploads/2023/05/Zone-Web-Product-Page-Design-06.png"
                    alt="Designed by" class="w-12 h-12 object-contain" />
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Designed by</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Industry Experts</p>
                </div>
            </div>

            <!-- Optional Spacer (if you want 4 columns to align visually) -->
            <div class="hidden lg:block"></div>
        </div>
    </div>

    

</template>

<script setup>
import zoneImg from "../../assets/products/zoneweb/hero.webp"
// No logic required yet
</script>
