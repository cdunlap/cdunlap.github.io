<script lang="ts" setup>
import type { ProjectDocumentDataBodySlice } from '~/prismicio-types';

// defineProps<{
//   project: {
//     title: string;
//     description: string;
//     link: string;
//     image: string;
//   };
// }>();
defineProps(getSliceComponentProps<ProjectDocumentDataBodySlice>())

</script>
<template>
  <div class="mb-4 break-inside-avoid">
    <div class="mb-4 break-inside-avoid">
      <img :src="image" class="w-full" alt="Project image">
      <h3 class="text-xl font-semibold mt-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-500">{{ project.description }}</p>
    </div>
  </div>
</template>