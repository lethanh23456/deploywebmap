import { TbGauge, TbFingerprint, TbChevronLeft } from "react-icons/tb";
import type { NavbarItem as NavbarItemType } from "@/shared/types/navbar.type";
import NavbarItem from "./NavbarItem";
import { ActionIcon, Box, Menu, Text } from "@mantine/core";
import { Link, useMatch } from "@tanstack/react-router";

const navItems: NavbarItemType[] = [
  {
    id: "0",
    label: "Home",
    href: "/admin",
    icon: <TbGauge size={16} />,
  },
  {
    id: "1",
    label: "Second parent link",
    href: "#required-for-focus",
    icon: <TbFingerprint size={16} />,
    defaultOpened: true,
    children: [
      { id: "1.1", label: "First child link", href: "#required-for-focus" },
      { id: "1.2", label: "Second child link", href: "#required-for-focus" },
      { id: "1.3", label: "Third child link", href: "#required-for-focus" },
    ],
  },
];

const NavbarMobileItem = (items: NavbarItemType[]) =>
  items.map((item) =>
    item.children && item.children.length > 0 ? (
      <Menu.Sub key={item.id}>
        <Menu.Sub.Target>
          <Menu.Sub.Item component={Link} to={item.href || "#"}>
            {item.label}
          </Menu.Sub.Item>
        </Menu.Sub.Target>
        <Menu.Sub.Dropdown>{NavbarMobileItem(item.children)}</Menu.Sub.Dropdown>
      </Menu.Sub>
    ) : (
      <Menu.Item key={item.id} component={Link} to={item.href || "#"}>
        <Text inherit>{item.label}</Text>
      </Menu.Item>
    )
  );

const NavbarCollapse = ({ collapsed }: { collapsed: boolean }) => {
  const isActive = useMatch({ from: '/admin' })
  console.log(isActive)
  return (
    <>
      {!collapsed ? (
        <NavbarItem items={navItems} />
      ) : (
        <Box className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Menu
              key={item.id}
              trigger="hover"
              position="right-start"
              openDelay={100}
              closeDelay={400}
            >
              <Menu.Target>
                <ActionIcon
                  component={Link}
                  activeProps={{
                    style: {
                      color: "#1c7ed6",
                    },
                  }}
                  to={item.href || "#"}
                  variant="light"
                  color="gray"
                >
                  {item.icon ?? <TbChevronLeft />}
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {item.children && NavbarMobileItem(item.children)}
              </Menu.Dropdown>
            </Menu>
          ))}
        </Box>
      )}
    </>
  );
};

export default NavbarCollapse;
