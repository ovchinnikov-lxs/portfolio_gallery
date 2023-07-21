<script setup lang="ts">
const { $routes } = useNuxtApp();

const list = Object.values($routes).map(path => ({
    name: path.slice(1),
    path,
}));

interface IBaseShape {
    radius: number
    centerX: number
    centerY: number
}
const baseShapeRef = ref<null | HTMLDivElement>(null);
const baseShape = reactive<IBaseShape>({
    radius: 0,
    centerX: 0,
    centerY: 0,
});
const DEFAULT_DIFF = -30;
const diff = ref(DEFAULT_DIFF);

function init() {
    if (!baseShapeRef.value) {
        return false;
    }

    baseShape.radius = baseShapeRef.value.clientWidth / 2;
    baseShape.centerX = baseShapeRef.value.clientWidth / 2;
    baseShape.centerY = baseShapeRef.value.clientHeight / 2;
}

const itemStyleList = computed(() => (index: number) => {
    const angle = (40 / list.length) * index + diff.value;
    const x = baseShape.centerX + (baseShape.radius / 1.1) * Math.cos((angle * Math.PI) / 180);
    const y = baseShape.centerY + baseShape.radius * Math.sin((angle * Math.PI) / 180);

    return {
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${angle}deg) translate(${baseShape.radius / 2}px) rotate(${-angle}deg)`,
    };
});

onMounted(() => {
    init();
});

const blackShape = ref<null | HTMLDivElement>(null);

function startBlackShapeAnimate() {
    if (!blackShape.value) {
        return false;
    }

    const newspaperSpinning = [
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' },
    ];

    blackShape.value.animate(newspaperSpinning, {
        duration: 1600,
        iterations: 1,
        easing: 'cubic-bezier(0.88, 0, 0.16, 1)',
    });
}

const route = useRoute();
watch(() => route.path, val => {
    startBlackShapeAnimate();
    diff.value = DEFAULT_DIFF + list.findIndex(i => i.path === val) * -4;
});
</script>

<template>
    <aside>
        <div :class="$style.wrapper">
            <div ref="baseShapeRef" :class="$style.shape">
                <div ref="blackShape" :class="$style.blackShape">
                </div>

                <NuxtLink
                    v-for="(item, index) in list"
                    :key="item.path"
                    :to="item.path"
                    :style="itemStyleList(index)"
                    :class="$style.item"
                >
                    {{ item.name }}
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.shape {
    position: relative;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        border-radius: 50%;
        pointer-events: none;
        transform: translate3d(-50%, -50%, 0);
    }

    &:before {
        width: calc(var(--ui-col) * 10);
        height: calc(var(--ui-col) * 10);
        border: 10px solid var(--ui-white-color);
    }

    &:after {
        width: calc(var(--ui-col) * 19);
        height: calc(var(--ui-col) * 19);
        border: 2px solid var(--ui-white-color);
        opacity: .32;
    }
}

.blackShape {
    @include aspect-ratio(1, 1);

    width: var(--aside-shape-width);
    border-radius: 50%;
    background: radial-gradient(90.31% 90.31% at 24.28% 23.84%, #4a4a4a 0%, #000 100%);
}

.item {
    position: absolute;
    text-transform: capitalize;
    white-space: nowrap;
    font-size: calc(var(--ui-unit) * 4);
    font-weight: 600;
    line-height: 134%;
    letter-spacing: -.16px;
    color: var(--ui-black-color);
    opacity: .32;
    transition: all .6s var(--base-cubic-bezier);

    &:global(.--is-active-link) {
        opacity: 1;
    }
}
</style>
