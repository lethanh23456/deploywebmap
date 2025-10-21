import { createRoute } from "@tanstack/react-router";
import { rootRoutes } from "@/app/routes/routes";
import { MainLayout } from "@/shared/layouts/main/MainLayout";
import { homeRoute, loginRoute , registerRoute } from "@/features/home/routes";



const mainRoute = createRoute({
    getParentRoute: () => rootRoutes,
    id: "main",
    component: MainLayout
});

const mainTree = mainRoute.addChildren([homeRoute , loginRoute ,registerRoute]);



export { mainTree, mainRoute ,loginRoute ,registerRoute};