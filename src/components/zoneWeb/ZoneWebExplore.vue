<template>
    <section
        class="relative overflow-hidden px-4 py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <!-- Floating cosmic elements -->
        <div class="absolute inset-0 pointer-events-none">
            <!-- Stars -->
            <div class="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
            <div
                class="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-80 animate-pulse delay-300">
            </div>
            <div class="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-500">
            </div>

            <!-- Orbiting planets -->
            <div class="absolute top-1/5 right-1/6 w-8 h-8 border-2 border-blue-300/30 rounded-full animate-spin-slow">
            </div>
            <div
                class="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-purple-300/30 rounded-full animate-spin-slow-reverse">
            </div>
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <!-- Left Text Content -->
            <div class="space-y-6">
                <div class="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm glow-animation">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
    </svg>
    Limited Time Offer
</div>


                <h2
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Explore A <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Free Trading
                        Universe</span> With Us!
                </h2>

                <div class="flex items-center space-x-4">
                    <div class="flex -space-x-2">
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                            src="https://randomuser.me/api/portraits/women/44.jpg" alt="Trader 1">
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                            src="https://randomuser.me/api/portraits/men/32.jpg" alt="Trader 2">
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                            src="https://randomuser.me/api/portraits/women/68.jpg" alt="Trader 3">
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Join <span class="font-semibold text-blue-600 dark:text-blue-400">10,000+ traders</span> already
                        exploring with us
                    </p>
                </div>
            </div>

            <!-- Right Text & Button -->
            <div class="space-y-8">
                <p class="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether you're a novice trader, a professional, or just curious about the world of stock markets,
                    there's something for everyone at Definedge Securities.
                </p>

                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300">Zero brokerage for first 30 days</p>
                    </div>

                    <div class="flex items-start space-x-3">
                        <div class="flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300">Access to premium trading tools</p>
                    </div>

                    <div class="flex items-start space-x-3">
                        <div class="flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300">Personalized trading dashboard</p>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-2">
                    <a href="https://signup.definedgesecurities.com/" target="_blank"
                        class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform text-center group">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                            🚀 Begin Your Trading Journey
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span
                            class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
                    </a>

                    <a href="#"
                        class="px-8 py-4 bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] transform flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd" />
                        </svg>
                        Watch Demo
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for static content
</script>


<style scoped>
@keyframes glow {
    0% {
        text-shadow: 0 0 5px rgba(59, 130, 246, 1), 0 0 10px rgba(59, 130, 246, 1), 0 0 15px rgba(59, 130, 246, 1);
    }

    50% {
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
    }

    100% {
        text-shadow: 0 0 5px rgba(59, 130, 246, 1), 0 0 10px rgba(59, 130, 246, 1), 0 0 15px rgba(59, 130, 246, 1);
    }
}

.glow-animation {
    animation: glow 1.5s ease-in-out infinite;
}
</style>
