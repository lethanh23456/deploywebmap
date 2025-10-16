import { NavLink } from "@mantine/core";
import type { NavbarItem as NavbarItemType } from "@/shared/types/navbar.type";
import { Link } from "@tanstack/react-router";

type NavbarItemProps = {
  items: NavbarItemType[];
};

const NavbarItem = ({ items }: NavbarItemProps) => {
  return (
    <>
      {items.map((item) => (
        <NavLink
          key={item.label}
          label={item.label}
          component={Link}
          to={item.href}
          leftSection={item.icon}
          childrenOffset={28}
          defaultOpened={item.defaultOpened}
        >
          {item.children && <NavbarItem items={item.children} />}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarItem;
