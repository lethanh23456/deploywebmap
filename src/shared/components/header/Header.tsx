import HeaderLogo from "./HeaderLogo";
import HeaderTool from "./HeaderTool";
import HeaderNavigator from "./HeaderNavigator";
import { useMemo, useState } from "react";
import type { Header as HeaderType } from "@/core/models/header.model";
import { Box } from "@mantine/core";
import { TbSearch } from "react-icons/tb";
import Input from "@/shared/components/input/Input";
import { useWindowResize } from "@/shared/hooks/useWindowResize";

interface HeaderProps {
  items?: HeaderType[] | null;
  isAdmin?: boolean;
}

const Header = ({ items = [], isAdmin = false }: HeaderProps) => {
  const appHeaderMemo = useMemo(() => {
    return items;
  }, [items]);
  const [search, setSearch] = useState("");
  const { isDesktop } = useWindowResize();

  return (
    <>
      <Box className="ml-2 flex items-center gap-2">
        <HeaderLogo isAdmin={isAdmin} />
        <Box>
          {/* <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<TbSearch />}
            placeholder="Search..."
            variant="filled"
            className={`max-w-[180px] min-w-[140px] ${!isAdmin && isDesktop ? "block" : "hidden"}`}
          /> */}
        </Box>
      </Box>
      <HeaderNavigator items={appHeaderMemo || []} />
      <HeaderTool />
    </>
  );
};

export default Header;
