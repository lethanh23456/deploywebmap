import { selectThemeMode } from "@/app/store/theme/theme.selector";
import { toggleTheme } from "@/app/store/theme/theme.slice";
import { AvatarMenu } from "@/shared/components/avatar/AvatarMenu";
import Language from "@/shared/components/language/Language";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TbSun, TbMoon } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const HeaderTool = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const { setColorScheme } = useMantineColorScheme();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    setColorScheme(themeMode === "light" ? "dark" : "light");
  };
  return (
    <section className="flex items-center gap-2 mr-2">
      <Language />
      <ActionIcon
        onClick={handleToggleTheme}
        radius="xl"
        variant="light"
        size="lg"
      >
        {themeMode === "light" ? <TbSun /> : <TbMoon />}
      </ActionIcon>
      <AvatarMenu />
    </section>
  );
};

export default HeaderTool;
