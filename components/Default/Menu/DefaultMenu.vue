<script setup lang="ts">

</script>

<template>
    <section class="DefaultMenu">
        <div :class="$style.wrapper">
            <div :class="$style.ham">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
    padding: calc(var(--ui-unit) * 8) calc(var(--ui-unit) * 6);
}

.ham {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 2);
    padding: calc(var(--ui-unit) * 2);
    cursor: pointer;

    span {
        width: calc(var(--ui-unit) * 6);
        height: 1px;
        border-radius: 2px;
        background-color: var(--ui-white-color);
        transition: all .3s ease;

        &:last-child {
            width: calc(var(--ui-unit) * 3);
        }
    }

    @include hover {
        span {
            opacity: .48;

            &:first-child {
                width: calc(var(--ui-unit) * 3);
            }

            &:last-child {
                width: 100%;
            }
        }
    }
}
</style>
