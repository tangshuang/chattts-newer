declare module "*.vue" {
    import Vue, { ComponentOptions } from "vue";
    import VueRouter from "vue-router";
    import { Route } from "vue-router";

    interface Vue {
        $router: VueRouter;
        $route: Route;
        $t: t;
    }



    export default ComponentOptions;
}
