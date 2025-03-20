<template>
  <svg
    class="w-full h-[100%] [transform:rotateX(15deg)]"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 800 200"
    preserveAspectRatio="none"
    xml:space="preserve"
  >
    <defs>
      <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: #4facfe" />
        <stop offset="100%" style="stop-color: #00f2fe" />
      </linearGradient>
      <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: #00f2fe" />
        <stop offset="100%" style="stop-color: #4facfe" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur class="blur" stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <path
      class="glow [stroke-width:8px] origin-center animate-wave-move wave-1 opacity-90"
      d="M -200 100 L -100 40 L 0 160 L 100 40 L 200 160 L 300 40 L 400 160 L 500 40 L 600 160 L 700 40 L 800 160 L 900 40 L 1000 160"
      fill="none"
      stroke="url(#waveGradient3)"
      filter="url(#glow)"
    />
    <path
      class="glow [stroke-width:8px] origin-center animate-wave-move wave-2 opacity-70"
      d="M -200 160 L -100 40 L 0 160 L 100 40 L 200 160 L 300 40 L 400 160 L 500 40 L 600 160 L 700 40 L 800 160 L 900 40 L 1000 160"
      fill="none"
      stroke="url(#waveGradient4)"
    />
    <path
      class="glow [stroke-width:8px] origin-center animate-wave-move wave-3 opacity-50"
      d="M -200 40 L -100 160 L 0 40 L 100 160 L 200 40 L 300 160 L 400 40 L 500 160 L 600 40 L 700 160 L 800 40 L 900 160 L 1000 40"
      fill="none"
      stroke="gray"
    />
  </svg>
  <div
    class="absolute w-full h-[100%] top-0 left-0 pointer-events-none [transform:rotateX(15deg)]"
  >
    <div
      class="dot-1 absolute w-[4px] h-[4px] top-[2px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[0%] animate-move-on-wave-1"
    ></div>
    <div
      class="dot-2 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[5%] animate-move-on-wave-2"
    ></div>
    <div
      class="dot-3 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[10%] animate-move-on-wave-3"
    ></div>
    <div
      class="dot-4 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[15%] animate-move-on-wave-4"
    ></div>
    <div
      class="dot-5 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[20%] animate-move-on-wave-5"
    ></div>
    <div
      class="dot-6 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[25%] animate-move-on-wave-6"
    ></div>
    <div
      class="dot-7 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[30%] animate-move-on-wave-7"
    ></div>
    <div
      class="dot-8 absolute w-[4px] h-[4px] top-[4px] rounded-full bg-[#4facfe] [box-shadow:0_0_15px_#4facfe,0_0_25px_#4facfe,0_0_35px_#4facfe,0_0_45px_#4facfe] opacity-0 origin-center left-[35%] animate-move-on-wave-8"
    ></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.glow {
  filter: url(#glow);
}
</style>
