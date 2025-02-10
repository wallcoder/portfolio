<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules'; // Import Pagination module
import 'swiper/css';
import 'swiper/css/pagination'; // Import Pagination styles

const onSwiper = (swiper) => {
    console.log('Swiper initialized:', swiper);
};

const onSlideChange = () => {
    console.log('Slide changed');
};
</script>

<template>
    <section class="pt-20 pb-20 " id="about">
        <Swiper :modules="[Pagination]" :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <SwiperSlide>
                <div class="flex flex-col smartphone-landscape:flex-row gap-6 pb-10">
                    <div class="flex flex-col w-full tablet:w-1/2 gap-5" v-motion-fade-visible-once>
                        <h3 class="text-gray-400 flex items-center gap-2 text-lg">
                            <img class="w-8 h-3" src="../assets/Arrow.png" alt="" />
                            Hello Again
                        </h3>
                        <div class="flex flex-col gap-3">
                            <h2 class="text-2xl font-semibold">I'm Biaka</h2>
                            <p class="text-base leading-relaxed">
                                I’m a software developer passionate about creating intuitive, efficient, and impactful
                                applications.
                                I thrive on solving problems and turning ideas into seamless digital experiences.
                            </p>
                        </div>
                    </div>
                    <div class="w-full tablet:w-[50%] flex items-center justify-center" v-motion-fade-visible-once>
                        <img src="../assets/fracturedjinx.jpg" alt=""
                            class="w-[190px] h-[200px] bg-gray-100 rounded-lg object-cover">
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col smartphone-landscape:flex-row gap-6">
                    <div class="flex flex-col w-full tablet:w-1/2 gap-5" v-motion-fade-visible-once>
                        <h3 class="text-gray-400 flex items-center gap-2 text-lg">
                            <img class="w-8 h-3" src="../assets/Arrow.png" alt="" />
                            Hello Again
                        </h3>
                        <div class="flex flex-col gap-3">
                            <h2 class="text-2xl font-semibold">I'm Biaka</h2>
                            <p class="text-base leading-relaxed">
                                I’m a software developer passionate about creating intuitive, efficient, and impactful
                                applications.
                                I thrive on solving problems and turning ideas into seamless digital experiences.
                            </p>
                        </div>
                    </div>
                    <div class="w-full tablet:w-[50%] flex items-center justify-center" v-motion-fade-visible-once>
                        <img src="../assets/fracturedjinx.jpg" alt=""
                            class="w-[190px] h-[200px] bg-gray-100 rounded-lg object-cover">
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col smartphone-landscape:flex-row gap-6">
                    <div class="flex flex-col w-full tablet:w-1/2 gap-5" v-motion-fade-visible-once>
                        <h3 class="text-gray-400 flex items-center gap-2 text-lg">
                            <img class="w-8 h-3" src="../assets/Arrow.png" alt="" />
                            Hello Again
                        </h3>
                        <div class="flex flex-col gap-3">
                            <h2 class="text-2xl font-semibold">I'm Biaka</h2>
                            <p class="text-base leading-relaxed">
                                I’m a software developer passionate about creating intuitive, efficient, and impactful
                                applications.
                                I thrive on solving problems and turning ideas into seamless digital experiences.
                            </p>
                        </div>
                    </div>
                    <div class="w-full tablet:w-[50%] flex items-center justify-center" v-motion-fade-visible-once>
                        <img src="../assets/fracturedjinx.jpg" alt=""
                            class="w-[190px] h-[200px] bg-gray-100 rounded-lg object-cover">
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
<style scoped>
:deep(.swiper-pagination-bullet) {
    background-color: #707070;
    /* Gray color */
    
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
}

/* Active dot */
:deep(.swiper-pagination-bullet-active) {
    background-color: #2563eb;
    /* Blue color */
    
    opacity: 1;
}
</style>
