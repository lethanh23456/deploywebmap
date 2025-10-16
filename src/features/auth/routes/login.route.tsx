import { createRoute } from "@tanstack/react-router";
import LoginPage from "@/features/auth/pages/Login";
import { authRoute } from "@/app/routes/auth.routes";

const loginRoute = createRoute({
    getParentRoute: () => authRoute,
    path: "/login",
    component: LoginPage
})

export { loginRoute };