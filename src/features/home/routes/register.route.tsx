import { mainRoute } from "@/app/routes/main.routes";
import { createRoute } from "@tanstack/react-router";
import Register  from "@/features/home/pages/Register";

const registerRoute = createRoute({
    getParentRoute: () => mainRoute,
    path: '/register',
    component: Register,

})

export default registerRoute;