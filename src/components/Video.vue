<template>
    <div id="player" class="player pb-12 relative bg-transparent">
      <!-- Controls Section -->
      <div class="vp-player-ui-container">
        <div class="vp-player-ui-overlays">
          <div class="vp-controls">
            <div class="flex items-center">
              <!-- Thumbnail Image -->
              <div
                v-if="!isPlaying"
                class="absolute w-full h-full rounded-lg cursor-pointer"
                @click="playVideo"
              >
                <img
                  src="https://i.vimeocdn.com/video/1539571474-322b96719dbacd19e8be4814dc2e524f873b93f023353e64de218638b602c887-d?mw=1000&mh=562"
                  alt="Video Thumbnail"
                  class="w-full h-full rounded-lg object-cover"
                />
                <!-- Play Button Overlay -->
                <div
                  class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-16 h-16 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M8 5v14l11-7z"
                    />
                  </svg>
                </div>
              </div>
  
              <!-- Video Element -->
              <video
                ref="videoPlayer"
                class="h-full w-full rounded-lg"
                controls
                @play="onPlay"
                @pause="onPause"
              >
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const videoPlayer = ref(null); // Reference to the video element
      const isPlaying = ref(false); // Track if the video is playing
  
      // Play video function
      const playVideo = () => {
        if (videoPlayer.value) {
          videoPlayer.value.play();
          isPlaying.value = true;
        }
      };
  
      // Handle video play event
      const onPlay = () => {
        isPlaying.value = true;
      };
  
      // Handle video pause event
      const onPause = () => {
        isPlaying.value = false;
      };
  
      return {
        videoPlayer,
        isPlaying,
        playVideo,
        onPlay,
        onPause,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  .player {
    max-width: 900px; /* Adjust as needed */
    margin: 0 auto;
  }
  
  .vp-controls {
    position: relative;
  }
  
  .vp-controls video {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  </style>