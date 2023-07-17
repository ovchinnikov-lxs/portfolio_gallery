<script setup lang="ts">
import { PropType } from 'vue';

// UiKit Components
import { UiButton } from '@ovchinnikov-lxs-frontend/ui-kit';

defineProps({
    color: {
        type: String as PropType<'black-20'>,
        default: 'black-20',
    },

    size: {
        type: String as PropType<'medium'>,
        default: 'medium',
    },

    rounded: {
        type: Boolean,
        default: true,
    },

    icon: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <UiButton
        v-bind="$attrs"
        :color="color"
        :rounded="rounded"
        :icon="icon"
        :size="size"
    >
        <slot></slot>
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    &.--is-rounded {
        &.--is-icon {
            border-radius: 50%;
        }
    }

    &.--medium-size {
        &.--is-icon {
            width: calc(var(--ui-unit) * 16);
            height: calc(var(--ui-unit) * 16);
        }
    }

    &.--black-20-color {
        &.--is-solid {
            background-color: var(--ui-black-color-20);
            color: var(--ui-white-color);

            @include hover {
                background-color: var(--ui-black-color);
                transform: scale(1.1);
            }
        }
    }
}
</style>
