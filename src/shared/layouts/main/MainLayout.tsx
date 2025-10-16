import { Outlet } from "@tanstack/react-router";
import { AppShell } from "@mantine/core";
import Header from "@/shared/components/header/Header";
import appHeader from "@/app/configs/main/app.header";
import type { Header as HeaderType } from "@/core/models/header.model";

export const MainLayout = () => {
  return (
    <AppShell
      padding="0"
      header={{ height: 56 }}
      styles={{
        header: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        main: {
          minHeight: 'auto',
        }
      }}
    >
      <AppShell.Header>
        <Header items={appHeader as HeaderType[]} isAdmin={false} />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
