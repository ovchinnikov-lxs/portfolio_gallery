export const routes = {
    antiqueBrass: '/antique-brass',
    cornflowerBlue: '/cornflower_blue',
    iceberg: '/iceberg',
    polishedPine: '/polished_pine',
    purple: '/purple',
    spanishGray: '/spanish_gray',
};

export default defineNuxtPlugin(() => ({
    provide: {
        routes,
    },
}));
