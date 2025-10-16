import { createRoute } from '@tanstack/react-router';
import { rootRoutes } from './routes';
import { AuthLayout } from '@/shared/layouts/auth/AuthLayout';
import { loginRoute, registerRoute } from '@/features/auth/routes';

const authRoute = createRoute({
    getParentRoute: () => rootRoutes,
    path: '/auth',
    component: AuthLayout
});

const authTree = authRoute.addChildren([loginRoute, registerRoute]);

export { authTree , authRoute };