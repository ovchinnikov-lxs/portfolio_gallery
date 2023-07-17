<script setup lang="ts">
defineProps({
    /**
     * The Required Title For Page Content
     */
    title: {
        type: String,
        required: true,
    },

    /**
     * The Required Text For Page Content
     */
    text: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <main class="PageContent">
        <div :class="$style.wrapper">
            <h1 :class="$style.title">
                {{ title }}
            </h1>
            <div :class="$style.text">
                {{ text }}
            </div>
        </div>
    </main>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 6);
}

.title {
    font-size: calc(var(--ui-unit) * 18);
    font-weight: 700;

    &:after {
        content: '';
        display: block;
        width: calc(var(--ui-unit) * 20);
        height: calc(var(--ui-unit) * 2.5);
        background-color: var(--ui-white-color);
    }
}

.text {
    font-size: calc(var(--ui-unit) * 4);
    font-weight: 400;
    line-height: 134%;
}
</style>
