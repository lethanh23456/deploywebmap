import { authRoute } from "@/app/routes/auth.routes";
import { createRoute } from "@tanstack/react-router";
import RegisterPage from "@/features/auth/pages/Register";

const registerRoute = createRoute({
    getParentRoute: () => authRoute,
    path: "/register",
    component: RegisterPage

})

export { registerRoute };