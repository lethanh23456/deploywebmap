import { mainRoute } from "@/app/routes/main.routes";
import { createRoute } from "@tanstack/react-router";
import Home  from "@/features/home/pages/Home";

const homeRoute = createRoute({
    getParentRoute: () => mainRoute,
    path: '/',
    component: Home
})

export default homeRoute;