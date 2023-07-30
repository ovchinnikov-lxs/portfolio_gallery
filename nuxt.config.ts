// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/portfolio-gallery/',
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'description', content: 'Just a simple example of my work' },
            ],
        },
    },

    css: ['~/assets/scss/common/_bundle.scss'],

    devtools: { enabled: true },

    modules: [
        '@nuxtjs/svg-sprite',
    ],

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
