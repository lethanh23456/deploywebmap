import { createRoute } from '@tanstack/react-router';
import { rootRoutes } from '@/app/routes/routes';
import  AdminLayout  from '@/shared/layouts/admin/AdminLayout';
import { homeRouteAdmin } from '@/features/admin/routes';

const adminRoute = createRoute({
    getParentRoute: () => rootRoutes,
    path:"/admin",
    component: AdminLayout
});

const adminTree = adminRoute.addChildren([homeRouteAdmin]);

export { adminTree, adminRoute };