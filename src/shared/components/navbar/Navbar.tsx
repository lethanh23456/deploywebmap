import { ActionIcon, AppShell } from "@mantine/core";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = ({
  collapsed,
  onToggleCollapsed,
}: {
  collapsed: boolean;
  onToggleCollapsed: () => void;
}) => {
  return (
    <AppShell.Navbar p="md">
      <ActionIcon
        onClick={onToggleCollapsed}
        radius="xl"
        variant="light"
        color="gray"
        size="sm"
        style={{
          position: "absolute",
          right: -12,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        {collapsed ? <TbChevronRight /> : <TbChevronLeft />}
      </ActionIcon>

      <NavbarCollapse collapsed={collapsed} />
    </AppShell.Navbar>
  );
};

export default Navbar;
