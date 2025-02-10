<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme';
import Button from '@/components/Button.vue'
import ButtonExt from '@/components/ButtonExt.vue'
const theme = useThemeStore()
const { isDark } = storeToRefs(theme)
const { toggleDark } = theme;
const email = import.meta.env.VITE_EMAIL

const isOpen = ref(false);

const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
}


</script>

<template>
    <div class="sticky top-0 z-10" :class="isDark ? 'bg-bg-dm/85' : 'bg-bg-lm/70'">
        <header
            class="z-9 flex items-center laptop:px-[15%] tablet:px-[8%] px-[2%] py-[20px] justify-between sticky absolute top-0 backdrop-blur-xl"
            >
            <span>
                <RouterLink to="/" class=" text-xl font-semibold">biaka.dev</RouterLink>
            </span>
            <nav class="flex text-sm items-center gap-12">
                <div class="hidden tablet:flex items-center gap-12 ">
                    <RouterLink to="#works">Projects</RouterLink>
                    <RouterLink to="#about">About</RouterLink>
                    <ButtonExt :link="`mailto:${email}`" content="Connect" />
                </div>



                <span class="flex items-center text-xl  gap-8">
                    <i class="fa-regular fa-moon cursor-pointer" v-if="isDark" @click="toggleDark()"
                        :class="isDark ? 'text-a-dm' : 'text-a-lm'"></i>
                    <i class="fa-regular fa-sun cursor-pointer" v-else @click="toggleDark()"
                        :class="isDark ? 'text-a-dm' : ''"></i>
                    <i class="tablet:hidden fa-solid fa-bars text-2xl cursor-pointer " @click="toggleIsOpen()"></i>


                </span>







            </nav>

        </header>

        <!-- Slider -->
        <div class="w-full h-100vh fixed top-0 z-10 slider  tablet:hidden">
            <Transition>
                <div class="absolute = w-full h-[100vh] opacity-50  bg " :class="isDark ? 'bg-bg-lm/20' : 'bg-bg-dm'"
                    @click="isOpen = false" v-if="isOpen"></div>
            </Transition>


            <div :class="[isOpen ? 'transform translate-x-[0%]' : 'transform translate-x-[100%]'], isDark ? 'bg-bg-dm' : 'bg-bg-lm'"
                class="absolute h-[100vh]  w-full smartphone-landscape:w-[40%] top-0 right-0 flex flex-col p-4   div-all duration-200 ease-linear">
                <div class="w-full flex items-center justify-between text-xl ">

                    <i class="tablet:hidden fa-solid fa-bars text-2xl cursor-pointer " @click="toggleIsOpen()"></i>
                    <i class="fa-regular fa-moon cursor-pointer" v-if="isDark" @click="toggleDark()"
                        :class="isDark ? 'text-a-dm' : 'text-a-lm'"></i>
                    <i class="fa-regular fa-sun cursor-pointer" v-else @click="toggleDark()"
                        :class="isDark ? 'text-a-dm' : ''"></i>
                </div>
                <div class="flex flex-col pt-5">
                    <RouterLink to="#works" class="py-4 w-full" @click="isOpen = false">Projects</RouterLink>
                    <RouterLink to="#about" class="py-4 w-full" @click="isOpen = false">About</RouterLink>
                    <RouterLink to="" class="py-4 w-full" @click="isOpen = false">Connect</RouterLink>
                </div>
            </div>


        </div>

    </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.slider:focus-within .bg {
    visibility: visible;
}</style>