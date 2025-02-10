<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme';
import Button from '@/components/Button.vue'
import Toast from '@/components/Toast.vue'
const theme = useThemeStore()
const { isDark } = storeToRefs(theme)
const { toggleDark } = theme;

</script>

<template>
    <div class="min-w-[360px] max-w-[1920px] my-0 mx-auto bg-bg-lm dark:bg-bg-dm text-p-lm dark:text-p-dm">
        <RouterView />
        <Toast />
    </div>

</template>
