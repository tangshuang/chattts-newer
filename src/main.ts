import './style.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import App from './app.vue';
import { merge } from 'ts-fns';

async function init() {
    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    router.beforeEach((to, from, next) => {
        if (from.query.embed && !to.query.embed) {
            const nav = merge(to, {
                query: {
                    embed: 1,
                },
            });
            next(nav);
            return;
        }
        next();
    });

    const app = createApp(App);

    app.use(router);
    app.mount('#app');
}

init();
