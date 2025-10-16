import Logo from "@/shared/components/logo/Logo";
import { Burger, NavLink, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@tanstack/react-router";
import appHeader from "@/app/configs/main/app.header";
import type { Header } from "@/core/models/header.model";

const HeaderNavigatorPopover = ({ items }: { items: Header[] }) => {
  return (
    <>
      {items.map((item) => (
        <NavLink key={item.id} component={Link} to={item.to} label={item.title}>
          {item.children && item.children.length > 0 ? (
            <HeaderNavigatorPopover items={item.children} />
          ) : null}
        </NavLink>
      ))}
    </>
  );
};

const HeaderLogo = ({ isAdmin = false }: { isAdmin: boolean }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Popover position="bottom-start" width={300} withArrow>
        <Popover.Target>
          <Burger
            className={`${!isAdmin ? "block" : "hidden"}`}
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="xl"
          />
        </Popover.Target>
        <Popover.Dropdown>
          <HeaderNavigatorPopover items={appHeader} />
        </Popover.Dropdown>
      </Popover>
      <Logo className="h-[40px]" />
    </>
  );
};

export default HeaderLogo;
