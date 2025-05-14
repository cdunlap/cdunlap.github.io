<script lang="ts" setup>
const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#', image: 'https://picsum.photos/300/200?random=1' },
    { title: 'Project 2', description: 'Description of project 2', link: '#', image: 'https://picsum.photos/300/200?random=2' },
    { title: 'Project 3', description: 'Description of project 3', link: '#', image: 'https://picsum.photos/300/200?random=3' },
    // Add more projects as needed
]
</script>
<template>
    <UContainer>
        <h2 class="py-16">Projects</h2>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-4">
            <ProjectCard 
                v-for="(project, index) in projects" :key="index"
                class="mb-4 break-inside-avoid" 
                :project="project">
                <!-- Project card 1 -->
            </ProjectCard>
        </div>
    </UContainer>
</template>