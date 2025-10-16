import { useLocation } from "@tanstack/react-router";
import type { BreadcrumbItem } from "../types/breadcrumb.type";

const getBreadcrumbItems = (breadcrumb: BreadcrumbItem[]) => {
  const location = useLocation();
  const pathName = location.pathname;
  const pathNames =
    pathName === "/" ? [] : pathName.split("/").filter(Boolean);

  const breadcrumbItems = pathNames.map((name, index) => {
    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
    const matched = breadcrumb.find((item) => item.href === href);
    const label =
      matched?.label ??
      (name ? name.charAt(0).toUpperCase() + name.slice(1) : null);
    const icon = matched?.icon;

    return { href, label, icon };
  });

  return [
    {
      href: "/",
      label: null,
      icon: breadcrumb.find((item) => item.href === "/")?.icon,
    },
    ...breadcrumbItems,
  ];
};

export { getBreadcrumbItems };
