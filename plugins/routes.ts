export const routes = {
    antiqueBrass: '/antique-brass',
    cornflowerBlue: '/cornflower-blue',
    iceberg: '/iceberg',
    polishedPine: '/polished-pine',
    purple: '/purple',
    spanishGray: '/spanish-gray',
};

export default defineNuxtPlugin(() => ({
    provide: {
        routes,
    },
}));
