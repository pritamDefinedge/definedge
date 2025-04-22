<template>
  <!-- Hero Banner -->
  <section
  class="relative font-sans border-b border-white/10 dark:border-white/20 overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-black/30 dark:before:bg-black/50 transition-colors duration-500"
>
  <!-- Background Image -->
  <img
    src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/about-us-banner-scaled.jpg"
    alt="About Us Banner"
    class="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />

  <!-- Content Wrapper -->
  <div
    class="relative z-20 flex flex-col justify-end items-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] transition-all duration-500"
  >
    <!-- Heading -->
    <h2
      class="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight drop-shadow-md"
    >
      About
    </h2>

    <!-- Breadcrumb Navigation (Desktop) -->
    <ul
      class="hidden lg:flex items-center justify-center space-x-4 mt-6 text-white/80 text-base font-light"
    >
      <li>
        <a
          href="https://www.definedgesecurities.com"
          class="hover:text-white transition-colors duration-200"
        >
          Home
        </a>
      </li>
      <li aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3 fill-white/50 rotate-90"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
      <li class="text-white/80">About</li>
    </ul>
  </div>
</section>


  <!-- Journey Section -->
  <section
    class="relative font-sans overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-br before:from-[#005366] before:to-[#003f80] before:opacity-95 dark:before:from-[#021e2a] dark:before:to-[#0a2c4e] transition-all duration-500"
  >
    <div
      class="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-24 py-16 md:py-24 text-center"
    >
      <!-- Heading -->
      <h5
        class="text-white uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg"
      >
        Definedge Journey
      </h5>

      <!-- Description -->
      <p
        class="text-gray-200 dark:text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-10"
      >
        A young, self-funded organization hungry to contribute and make a
        difference. On a mission to empower the community by providing
        education and developing innovative products & features that help them
        make smarter & more informed decisions.
      </p>

      <!-- Dynamic Content Components -->
      <Journey />
      <Video />
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-12 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0A3C82] dark:text-white mb-12">
        Meet the Team
      </h2>

      <div
        class="relative flex flex-wrap justify-center min-h-[400px] gap-6"
        ref="teamSection"
      >
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.id"
          :member="member"
          :class="{
            'motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur':
              inView,
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TeamMemberCard from '../components/aboutus/TeamMemberCard.vue'
import Journey from '../components/aboutus/Journey.vue'
import Video from '../components/aboutus/Video.vue'
import teamMembersData from '../data/teammember.json'

const teamMembers = ref(teamMembersData)
const inView = ref(false)
const teamSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      inView.value = entry.isIntersecting
    },
    { threshold: 0.1 }
  )

  if (teamSection.value) {
    observer.observe(teamSection.value)
  }
})
</script>

<style scoped>
/* Add any custom animations or effects here if needed */
</style>
