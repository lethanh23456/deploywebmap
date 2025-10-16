import { adminRoute } from "@/app/routes/admin.routes";
import Home from "../pages/Home";
import { createRoute } from "@tanstack/react-router";

const homeRouteAdmin = createRoute({
    getParentRoute: () => adminRoute,
    path: "/",
    component: Home
})

export { homeRouteAdmin };