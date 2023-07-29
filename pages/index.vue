<script setup lang="ts">
onMounted(() => {
    const { $routes } = useNuxtApp();
    navigateTo($routes.purple);
});
</script>

<template>
    <div></div>
</template>
