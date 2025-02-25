<template>
  <section
    class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:z-10 border-b border-white"
  >
    <img
      src="https://www.definedgesecurities.com/wp-content/uploads/2022/06/about-us-banner-scaled.jpg"
      alt="Banner Image"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="min-h-[580px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-end items-center text-center p-6"
    >
      <h2 class="text-white sm:text-4xl text-2xl font-normal leading-6">
        About
      </h2>
      <ul
        class="hidden lg:flex items-center justify-center font-[sans-serif] space-x-4 mt-4"
      >
        <li class="text-[#ffffffab] cursor-pointer text-xl lg:text-base">
          <a
            class="hover:cursor-pointer"
            href="https://www.definedgesecurities.com"
            >Home</a
          >
        </li>
        <li class="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-gray-400 w-2.5 -rotate-90"
            viewBox="0 0 24 24"
            aria-label="Arrow Icon"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
        <li class="text-[#ffffffab] text-xl lg:text-base cursor-pointer">
          About
        </li>
      </ul>
    </div>
  </section>

  <section
    class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:z-10"
    style="
      background-color: transparent;
      background-image: linear-gradient(45deg, #005366 0%, #003f80 100%);
      opacity: 0.95;
    "
  >
    <div
      class="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6"
    >
      <div class="container lg:px-24 py-18">
        <h5
          class="text-white uppercase tracking-wide leading-15 text-base sm:text-[2.265rem] md:text-[2.265rem] font-extrabold mb-8"
        >
          Definedge Journey
        </h5>
        <p class="text-gray-200 text-md sm:text-base md:text-xl font-semibold">
          A young, self-funded organization hungry to contribute and make a
          difference. On a mission to empower the community by providing
          education and developing innovative products & features that help them
          make smarter & more informed decisions.
        </p>
        <Journey />
        <Video />
      </div>
    </div>
  </section>

  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="lg:text-6xl font-bold text-center text-[#0A3C82] mb-12">
        Meet the Team
      </h2>

      <div
        class="relative flex flex-wrap min-h-screen justify-center overflow-hidden py-6 sm:py-12"
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

<script>
import TeamMemberCard from "../components/TeamMemberCard.vue";
import Journey from "../components/Journey.vue";
import Video from "../components/Video.vue";
import teamMembersData from "../data/teammember.json";

export default {
  components: {
    TeamMemberCard,
    Journey,
    Video,
  },
  data() {
    return {
      teamMembers: teamMembersData,
      inView: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.inView = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(this.$refs.teamSection);
  },
};
</script>

<style scoped></style>
