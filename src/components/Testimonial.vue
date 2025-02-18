<template>
  <div class="p-4 font-[sans-serif] max-w-6xl max-lg:max-w-3xl max-md:max-w-lg mx-auto">
    <div class="max-w-2xl text-center mx-auto">
      <h2 class="text-gray-800  text-3xl font-extrabold">The <span class="text-[#efa909]">Love</span> We Get</h2>
 
    </div>

    <!-- Testimonial Container -->
    <div class="flex justify-between items-center mt-12">
      <!-- Left Arrow -->
      <div class="relative mr-3">
        <div
          @click="prevTestimonial"
          class="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-[-20px] top-0 bottom-0 my-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-gray-800 inline"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Testimonials Wrapper -->
      <transition name="testimonial-slide">
        <div class="flex overflow-x-hidden">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="testimonial.id"
            class="border border-gray-300 lg:p-6 p-4 rounded-xl bg-white relative mx-2 w-full max-w-xs h-auto overflow-hidden"
          >
            <div class="flex items-center">
              <img
                :src="testimonial.image"
                class="w-14 h-14 rounded-full border border-purple-600"
              />
              <div class="ml-4">
                <h6 class="text-gray-800 text-sm font-semibold">
                  {{ testimonial.name }}
                </h6>
                <p class="text-xs text-gray-500 mt-1">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>

            <hr class="rounded-full border-2 mt-6" />

            <div class="mt-6 overflow-y-auto max-h-64">
              <p class="text-gray-800 text-sm leading-relaxed">
                {{ testimonial.feedback }}
              </p>
            </div>

            <div class="flex space-x-1 mt-4">
              <svg
                v-for="star in testimonial.rating"
                :key="star"
                class="w-4 h-4 fill-purple-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </transition>

      <!-- Right Arrow -->
      <div class="relative ml-8">
        <div
          @click="nextTestimonial"
          class="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-0 top-0 bottom-0 my-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-gray-800 inline"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Darshankumar Dave",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " I second that. I just made a suggestion in a YouTube live session by Prashant Sir regarding buying call options instead of just straddle from option chain. And a couple of days later a new version comes with provision to buy call/put straddle to accommodate all types of traders. Just imagine noting the suggestion from hundreds to a few thousand YT live comments and implementing it so fast. And my association with DE is only a couple months old and therefore nobody knew me. As far as free is concerned, my DE products are free due to brokerage adjustment against the purchase. Last FY I paid more brokerage (to another broker) than the combined price of all DE products in just 6 months so at that rate my costs will be recovered in less than 6 months. And even if someone's brokerage is less than that, I am sure you will make much more profit than the software costs. Great tools can't make one a great trader but a good trader can do great things with great tools.",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 2,
          name: "Ravi",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " I am constantly amazed by @PrashantShah267 sir's leadership. The culture that he has built in definedge is amazing. Big corporates aspire for such culture in their organisation but are not even close. Costumer centricity, Ownership, Bias for action, innovation, active listening are few leadership qualities which are practiced by definedge team day in day out. This is a result of his vision and clarity of thoughts. He is also blessed with the company of like minded people in the leadership team. As a result of this, definedge has earned the trust of all the users. Every user indeed speaks for definedge and recommends it's product to his/her family and friends. After 17 years of experience in big organizations, I can say that @PrashantShah267 is an amazing leader and it is almost impossible for other companies to match the culture at definedge .",
          rating: [1, 2, 3, 4, 5], // 5 stars
        },
        {
          id: 3,
          name: "Deepak Chhabria",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " I quote from Prashant sir post 'Once a broker told me, whatever you do you can't make all your clients profitable. It may be true but at least there can be genuine intent. We would be unable to work for a single day if we did not work with this intention. That’s how we are building Definedge.' this is not true i am one of the examples who has transformed from a loss making to profit making discretionary trader to process driven trader",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 4,
          name: "Vish",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " Add me to your quote Deepak. After Years of looking for right mentors, I have stopped my search. Gurukul is one of the best things that has happened to me. April has been my best month in my 3+ years of trading journey.",
          rating: [1, 2, 3, 4, 5], // 5 stars
        },
        {
          id: 5,
          name: "Mr.GenZ",
          position: "@NextBu11",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            "Absolutely agree with you Using  @Definedge securities  for last 5 months seamless execution, no errors or glitches, no lag on platform and tons of features It's breaking all expectations limits Just one request @Prashantshah267  please bring automate features ",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 6,
          name: "Abhijit Talwalkar",
          position: "@tifosiindia",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " This  #OPTEST  is going to be the real game changer…especially after the incorporation of PnF & Renko…Great work as always from the entire team of   @Definedge @Raghunath_TL @ap_pune @Prashantshah267",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 7,
          name: "Puneet Arora",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            "If any broker or research team could consistently make all its clients profitable, without a doubt, it would be the Definedge team. No one else even comes close.",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 8,
          name: "Suneet",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " The best thing is  @prashant shah,that he teaches the Funda behind the technical jargon,that no one dare to teach,either they do not know  or they don’t want to teach. What I second guess Mr. Prashant Shah may have literally coded every technical indicator on Excel, He knows all the concept in and out. I also used to try to code the indicators in excel to understand it's unique,properties,because conviction can not be bought.But the R zone is of next level,no excel or manual intervention is required.",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 9,
          name: "Prasad Udgirkar",
          position: "@udgirkarpp",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            "Attended #manthan  in Pune मंथन के बाद अमृत मिलता है l Thanks for organising  @Prashantshah267 @ap_pune @rajran06 @srvithal388  @MANGESH_PNF @shahvinayv @sagarjaju @Definedge",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 10,
          name: "Prasad Udgirkar",
          position: "@udgirkarpp",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            "Attended #manthan  in Pune मंथन के बाद अमृत मिलता है l Thanks for organising  @Prashantshah267 @ap_pune @rajran06 @srvithal388  @MANGESH_PNF @shahvinayv @sagarjaju @Definedge",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 11,
          name: "Varun",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " You have done a great deed in sharing your extensive knowledge on noiseless charting and we all owe you @PrashantShah267 & all mentors in definedge for the same. This is the least we can do to to appreciate your effort. Whenever i get the opportunity i do spread the word among the traders about how noiseless trading can help them improve there trading with and will keep doing in future too",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 12,
          name: "Deven",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " @PrashantShah267 Definedge is life changing for traders like me ... cant thank god enough to have come in touch with @kaushikakiwatkar and from him to @Team_Definedge and @PrashantShah267",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 13,
          name: "Gaurav Bajaj",
          position: "",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " Absolutely agree with you Using @Definedge securities  for last 5 months seamless execution, no errors or glitches, no lag on platform and tons of features It's breaking all expectations limits Just one request @Prashantshah267  please bring automate features  ",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 14,
          name: "Ghanshyam Raj",
          position: "@GhanshyamRaj",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " Just had to give a shoutout to  @Definedge  ! Their trading platform is an absolute game-changer, taking objective trading to new heights with P&F and Renko charting methods.   And the fact that you can analyze mutual funds too? They are ahead in the competition!  @Prashantshah267",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 15,
          name: "The Stop-Loss Trader",
          position: "@ravi26183",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " Congratulations @Raghunath_TL , sir for this wonderful product. It is surely going to help a lot of option traders. You deserve a lot of applause for this 👏 👏 👏 👏 👏 @Definedge @ap_pune @Prashantshah267 ",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 16,
          name: "A.",
          position: "@abadjate",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            "Well surmised by  @KAnantrao  - reading his threads are as usual a pleasure! After  @Nithin0dha  if there is any person to keep a close watch on in the capital markets space, in my books it will be  @Prashantshah267  and Team  @Definedge . They are 'charting' a 'noiseless' revolution ",
          rating: [1, 2, 3, 4], // 4 stars
        },
        {
          id: 17,
          name: "The Stop-Loss Trader",
          position: "@ravi26183",
          image: "https://www.definedgesecurities.com/wp-content/uploads/2023/08/avatar-1.jpg",
          feedback:
            " I'm happy to have earned these certificates from @Definedge  #Shelf  is a good platform where too much knowledge is available for free. Those who want to learn TA should explore.  @Prashantshah267 @srvithal388 @ap_pune @Raghunath_TL @Definedge ",
          rating: [1, 2, 3, 4], // 4 stars
        },
      ],
      currentTestimonialIndex: 0,
      testimonialsPerSlide: 1, 
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    visibleTestimonials() {
      return this.testimonials.slice(
        this.currentTestimonialIndex,
        this.currentTestimonialIndex + this.testimonialsPerSlide
      );
    },
  },
  methods: {
    nextTestimonial() {
      if (
        this.currentTestimonialIndex <
        this.testimonials.length - this.testimonialsPerSlide
      ) {
        this.currentTestimonialIndex++;
      } else {
        this.currentTestimonialIndex = 0; // Loop back to the first set
      }
    },
    prevTestimonial() {
      if (this.currentTestimonialIndex > 0) {
        this.currentTestimonialIndex--;
      } else {
        this.currentTestimonialIndex =
          this.testimonials.length - this.testimonialsPerSlide; // Loop to the last set
      }
    },
    updateTestimonialsPerSlide() {
      this.windowWidth = window.innerWidth;
      this.testimonialsPerSlide = this.windowWidth < 768 ? 1 : this.windowWidth < 1024 ? 2 : 3; 
    },
  },
  mounted() {
    this.updateTestimonialsPerSlide();
    window.addEventListener("resize", this.updateTestimonialsPerSlide);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateTestimonialsPerSlide);
  },
};
</script>

<style scoped>
.testimonial-slide-enter-active,
.testimonial-slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.testimonial-slide-enter,
.testimonial-slide-leave-to {
  transform: translateX(100%);
}

.testimonial-card {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.testimonial-slide-enter-to,
.testimonial-slide-leave {
  opacity: 1;
}

.testimonial-slide-enter,
.testimonial-slide-leave-to {
  transform: translateX(100%);
}
</style>
