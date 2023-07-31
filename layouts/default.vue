<script setup lang="ts">
import { IListItem } from '~/assets/ts/types/items';
import DefaultModal from '~/components/Default/Modal/DefaultModal.vue';

const route = useRoute();

const styleList = computed(() => [{
    '--default-background': `var(--ui-${String(route.name)}-color)`,
}]);

const { $routes } = useNuxtApp();
const list: Array<IListItem> = [
    {
        name: 'Purple',
        title: 'Dreamy Flowers',
        text: 'Behance: Omar Aqil',
        src: '/portfolio_gallery/slides/slide_1-min.png',
        path: $routes.purple,
    },
    {
        name: 'Iceberg',
        title: 'LUMI',
        text: 'Lumi by Roli',
        src: '/portfolio_gallery/slides/slide_2-min.png',
        path: $routes.iceberg,
    },
    {
        name: 'Polished Pine',
        title: 'LUMI',
        text: 'Lumi by Roli',
        src: '/portfolio_gallery/slides/slide_3-min.png',
        path: $routes.polishedPine,
    },
    {
        name: 'Spanish Gray',
        title: 'Type Balance',
        text: 'Antian Lmeri',
        src: '/portfolio_gallery/slides/slide_4-min.png',
        path: $routes.spanishGray,
    },
    {
        name: 'Antique Brass',
        title: 'Type 2021 Edition',
        text: 'Get it Studio',
        src: '/portfolio_gallery/slides/slide_5-min.png',
        path: $routes.antiqueBrass,
    },
    {
        name: 'Cornflower Blue',
        title: 'Compositions III',
        text: 'Phillip Luck',
        src: '/portfolio_gallery/slides/slide_6-min.png',
        path: $routes.cornflowerBlue,
    },
];

const activePage = computed(() => list.find(p => p.path === route.path));
const nextPath = computed(() => {
    const route = useRoute();
    const currentIndex = list.findIndex(i => i.path === route.path);

    if (currentIndex === list.length - 1) {
        return list[0].path;
    }

    return list[currentIndex + 1].path;
});

</script>
<template>
    <div :style="styleList" :class="$style.DefaultLayout">
        <Head v-if="activePage && activePage.name">
            <Title>
                Color {{ activePage.name }} | Gallery
            </Title>
        </Head>

        <DefaultModal :class="$style.modal"/>

        <DefaultAside :list="list" :class="$style.aside"/>

        <div :class="$style.page">
            <slot />

            <footer :class="$style.footer">
                Designed by
                <br/>
                Insta: Basit.designs

                <UiButton :to="nextPath" :class="$style.button">
                    <UiIcon name="ui/arrow" />
                </UiButton>
            </footer>
        </div>

        <DefaultTape
            v-if="activePage && activePage.path && list"
            :value="activePage.path"
            :slides="list"
            :class="$style.tape"
        />
        <DefaultMenu :class="$style.menu"/>
    </div>
</template>

<style lang="scss" module>
.DefaultLayout {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    min-height: 100vh;
    background-color: var(--default-background);
    transition: background-color 1.6s var(--base-cubic-bezier);
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
}

.aside {
    position: absolute;
    top: 50%;
    left: calc(var(--aside-shape-width) / -2);
    z-index: 2;
    transform: translate3d(0, -50%, 0);
}

.page {
    display: flex;
    flex-direction: column;
    width: calc(var(--ui-unit) * 106);
    row-gap: calc(var(--ui-unit) * 6);
    margin-left: calc(var(--ui-unit) * 118);
    padding: calc(var(--ui-unit) * 44) 0 calc(var(--ui-unit) * 12);
}

.footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    column-gap: calc(var(--ui-unit) * 2);
    margin-top: auto;
}

.button {
    flex-shrink: 0;
}

.tape {
    width: 46%;
    margin-left: calc(var(--ui-unit) * 12);
}

.menu {
    width: calc(var(--ui-unit) * 22);
}
</style>
