<script setup lang="ts">
const route = useRoute();

const styleList = computed(() => [{
    '--default-background': `var(--ui-${String(route.name)}-color)`,
}]);
</script>
<template>
    <div :style="styleList" :class="$style.DefaultLayout">
        <DefaultAside :class="$style.aside"/>

        <div :class="$style.page">
            <slot />

            <footer :class="$style.footer">
                Designed by
                <br/>
                Insta: Basit.designs

                <UiButton :class="$style.button">
                    <!--TODO: Add in deps icon sprite-->
                    icon
                </UiButton>
            </footer>
        </div>

        <DefaultTape :class="$style.tape"/>
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
    width: calc(var(--ui-col) * 20);
}

.menu {
    width: calc(var(--ui-unit) * 22);
}
</style>
