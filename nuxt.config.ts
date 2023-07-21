// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Portfolio Gallery',
            meta: [
                { name: 'description', content: 'Just a simple example of my work' },
            ],
        },
    },

    modules: [
        '@nuxtjs/svg-sprite',
    ],

    css: ['~/assets/scss/common/_bundle.scss'],

    router: {
        options: {
            linkActiveClass: '--is-active-link',
            linkExactActiveClass: '--is-exact-link',
        },
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    vite: {
        plugins: [
            stylelint(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "~/assets/scss/shared/_functions.scss" as *;
                    @use "~/assets/scss/shared/_mixins.scss" as *;
                    `,
                },
            },
        },
    },
});
