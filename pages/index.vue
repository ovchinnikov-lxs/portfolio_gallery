<script setup lang="ts">
onMounted(() => {
    const { $routes } = useNuxtApp();
    navigateTo($routes.purple);
});
</script>

<template>
    <div class="index"></div>
</template>
