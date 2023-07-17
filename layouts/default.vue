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

                <UiButton>
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
}

.aside {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    transform: translate3d(0, -50%, 0);
}

.page {
    display: flex;
    flex-direction: column;
    width: calc(var(--ui-unit) * 106);
    row-gap: calc(var(--ui-unit) * 6);
    padding: calc(var(--ui-unit) * 44) 0 calc(var(--ui-unit) * 12);
}

.footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
}

.tape {
    width: calc(var(--ui-col) * 20);
}

.menu {
    width: calc(var(--ui-unit) * 22);
}
</style>
