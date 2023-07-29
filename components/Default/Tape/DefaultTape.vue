<script setup lang="ts">
import { PropType } from 'vue';
import { IListItem } from '~/assets/ts/types/items';

const props = defineProps({
    slides: {
        type: Array as PropType<IListItem[]>,
        default: () => [],
    },

    value: {
        type: String,
        required: true,
    },
});

const containerRef = ref<HTMLDivElement>();
const itemRefs = ref<HTMLDivElement[]>([]);
const itemOffset = ref(0);
let resizeObserver: ResizeObserver;

function onSlideTo(path: string) {
    const activeItem = itemRefs.value.find(i => i.dataset.id === path);

    if (!activeItem) {
        return false;
    }

    itemOffset.value = activeItem.offsetTop * -1;
}

watch(() => props.value, (val: string) => {
    onSlideTo(val);
});

function initResizeObserver() {
    if (!containerRef.value) {
        return false;
    }
    resizeObserver = new ResizeObserver(() => onSlideTo(props.value));


    resizeObserver.observe(containerRef.value);
}

const containerStyleList = computed(() => [{
    transform: `translateY(calc(${itemOffset.value}px + var(--container-padding)))`,
}]);

onMounted(() => {
    initResizeObserver();
    onSlideTo(props.value);
});

onUnmounted(() => {
    if (resizeObserver) {
        resizeObserver.disconnect();
    }
});
</script>

<template>
    <main class="DefaultTape">
        <div :class="$style.wrapper">
            <div
                ref="containerRef"
                :style="containerStyleList"
                :class="$style.container"
            >
                <div
                    v-for="(item, index) in slides"
                    ref="itemRefs"
                    :key="index"
                    :data-id="item.path"
                    :class="$style.item"
                >
                    <DefaultTapeItem
                        :index="index"
                        :title="item.title"
                        :text="item.text"
                        :src="item.src"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" module>
$border-color: var(--ui-white-color);

.wrapper {
    --container-padding: calc(var(--ui-unit) * 56);

    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border-right: 1px solid $border-color;
    border-left: 1px solid $border-color;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 3;
        width: 1px;
        height: 100%;
        background-color: $border-color;
        transform: translate3d(-50%, 0, 0);
    }
}

.container {
    padding-top: var(--container-padding);
    transition: transform .6s var(--base-cubic-bezier);
}

.item {
    width: 50%;

    &:nth-child(2n+1) {
        margin-left: auto;
    }
}
</style>
