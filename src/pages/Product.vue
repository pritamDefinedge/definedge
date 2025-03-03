<template>
  <div id="particles-js" class=""></div>
  <div class="relative  z-10 text-center overflow-auto">
    <div class="bg-gray-900 bg-opacity-75  w-1/2 mx-auto rounded-3xl border border-green-600 mt-32 p-8">
      <div class="text-white text-xl">
        <h1 class="text-4xl font-bold"> Product <span class="text-green-400"> Page </span></h1>
        <h3 class="text-2xl mt-2">Definedge</h3>
        <hr class="w-1/2 border-t-2 border-green-400 my-4 rounded mx-auto" />
        <p class="text-lg">Coming Soon - <span class="text-green-400">2025</span></p>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      // Initialize particlesJS when the component is mounted
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: "#5ce546",
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    });
  },
};
</script>

<style scoped>
/* particles canvas */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #0d1213;
  z-index: 1;
}
</style>
