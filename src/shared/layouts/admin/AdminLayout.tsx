import { AppShell } from "@mantine/core";
import { Outlet } from "@tanstack/react-router";
import Header from "@/shared/components/header/Header";
import { useState } from "react";
import Navbar from "@/shared/components/navbar/Navbar";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <AppShell
      padding="md"
      header={{ height: 56 }}
      navbar={{ width: collapsed ? 60 : 300, breakpoint: 'none' }}
      styles={{
        header: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        main:{
          minHeight: 'auto',
        }
      }}
    >
      <AppShell.Header>
        <Header isAdmin={true} />
      </AppShell.Header>
      <Navbar collapsed={collapsed} onToggleCollapsed={handleToggleCollapsed} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AdminLayout;
