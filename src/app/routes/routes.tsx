import { createRootRoute, createRouter } from "@tanstack/react-router";
import { mainTree } from "./main.routes";
import { adminTree } from "./admin.routes";
import {authTree} from "./auth.routes";
import { RootLayout } from "@/shared/layouts/root/RootLayout";
import NotFound from "@/app/error/NotFound";

const rootRoutes = createRootRoute({
    component: RootLayout
});

const rootTree = rootRoutes.addChildren([mainTree, adminTree, authTree]);

const router = createRouter({
    routeTree: rootTree,
    defaultNotFoundComponent: NotFound
});

export { router , rootRoutes, rootTree };