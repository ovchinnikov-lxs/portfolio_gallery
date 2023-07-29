<script setup lang="ts">
const title = 'github:ovchinnikov-lxs'
    .split('')
    .map((i: string, index: number) => `<span style="transition-delay: ${index / 100}s">${i}</span>`)
    .join('');
</script>

<template>
    <div class="DefaultMenuModal">
        <a
            href="https://github.com/ovchinnikov-lxs"
            target="_blank"
            :class="$style.wrapper"
            v-html="title"
        >
        </a>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--ui-col) * 3);
    font-weight: 600;
    color: var(--ui-white-color);

    @include hover {
        color: var(--default-background);
    }

    span {
        transition: color .3s ease;
    }
}
</style>
