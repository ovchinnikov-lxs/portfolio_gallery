<script setup lang="ts">
// Utils
import { leadingZero } from '~/assets/ts/utils/format-utils';

defineProps({
    title: {
        type: String,
        default: '',
    },

    text: {
        type: String,
        default: '',
    },

    src: {
        type: String,
        default: '',
    },

    index: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <div class="DefaultTapeItem">
        <div :class="$style.wrapper">

            <div :class="$style.top">
                <div v-if="title || text">
                    <h5 v-if="title" :class="$style.title">
                        {{ title }}
                    </h5>

                    <div v-if="text" :class="$style.text">
                        {{ text }}
                    </div>
                </div>

                <div :class="$style.index">
                    {{ leadingZero(index + 1) }}
                </div>
            </div>

            <div :class="$style.imageWrapper">
                <UiImage
                    :src="src"
                    :class="$style.image"
                />
            </div>

        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: calc(var(--ui-unit) * 6);
}

.top {
    display: flex;
    align-items: flex-end;
    column-gap: var(--ui-col);
    padding: 0 calc(var(--ui-unit) * 5);
    color: var(--ui-white-color);
}

.title {
    margin: 0;
    font-size: calc(var(--ui-unit) * 4);
    font-weight: 600;
    line-height: 134%;
    letter-spacing: -.01em;
}

.text {
    font-size: calc(var(--ui-unit) * 3);
    line-height: 134%;
    letter-spacing: -.01em;
}

.index {
    margin-left: auto;
    text-align: right;
    font-size: calc(var(--ui-unit) * 24);
    font-weight: 700;
    line-height: .75;
}

.imageWrapper {
    @include aspect-ratio(400, 320);
}

.image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
}
</style>
