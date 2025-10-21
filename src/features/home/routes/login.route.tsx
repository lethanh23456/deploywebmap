import { mainRoute } from "@/app/routes/main.routes";
import { createRoute } from "@tanstack/react-router";
import Login  from "@/features/home/pages/Login";

const loginRoute = createRoute({
    getParentRoute: () => mainRoute,
    path: '/login',
    component: Login,

})

export default loginRoute;