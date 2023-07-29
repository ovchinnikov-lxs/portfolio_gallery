<script setup lang="ts">
// Lib Components
import { UiImage } from '@ovchinnikov-lxs-frontend/ui-kit';

const props = defineProps({
    hasPreview: {
        type: Boolean,
        default: true,
    },

    src: {
        type: String,
        default: '',
    },
});

const imageAttrs = computed(() => ({
    origin: props.src,
    // preview: props.src, todo: imgproxy blured
}));
</script>

<template>
    <UiImage v-bind="{...$attrs, ...imageAttrs}">
        <template v-if="hasPreview" #preview></template>
    </UiImage>
</template>

<style lang="scss">
.UiImage__preview {
    background: linear-gradient(90deg, var(--ui-white-color), var(--default-background));
    background-size: 200% 100%;
    animation: gradientAnimation 2s infinite;

    @keyframes gradientAnimation {
        0% {
            background-position: 0 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0 50%;
        }
    }
}
</style>
