<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
{
    label: 'Projects',
    to: '/',
},
{
    label: 'Resume',
    to: '/resume'
}
])
</script>

<template>
    <header class="bg-neutral-950">
        <UNavigationMenu :items="items" class="w-full justify-center" />
    </header>
</template>