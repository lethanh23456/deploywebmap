import { Breadcrumbs, Button, ActionIcon } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { TbChevronRight } from "react-icons/tb";
import type { BreadcrumbItem } from "@/shared/types/breadcrumb.type";
import { getBreadcrumbItems } from "@/shared/utils";

const Breadcrumb = ({ breadcrumb }: { breadcrumb: BreadcrumbItem[] }) => {
  const breadcrumbItems = getBreadcrumbItems(breadcrumb);

  return (
    <Breadcrumbs separator={<TbChevronRight />}>
      {breadcrumbItems.map((item) =>
        item.label ? (
          <Button
            key={item.href}
            component={Link}
            to={item.href}
            variant="light"
            color="blue"
            fw={500}
            size="xs"
            leftSection={item.icon}
          >
            {item.label}
          </Button>
        ) : (
          <ActionIcon
            key={item.href}
            component={Link}
            to={item.href}
            variant="light"
            color="blue"
            fw={500}
          >
            {item.icon}
          </ActionIcon>
        )
      )}
    </Breadcrumbs>
  );
};

export { Breadcrumb };
