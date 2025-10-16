import { Button, Menu, Text } from "@mantine/core";
import { TbLanguage } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Languages, type LanguageCode } from "@/app/enums/language.enum";
import { selectLanguage } from "@/app/store/language/language.selector";
import { setLanguage } from "@/app/store/language/language.slice";

const Language = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(selectLanguage);

  return (
    <Menu>
      <Menu.Target>
        <Button leftSection={<TbLanguage />} variant="subtle">
          <Text>{Languages[currentLang].label}</Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {Object.values(Languages).map(({ code, label }) => (
          <Menu.Item
            key={code}
            onClick={() => dispatch(setLanguage(code as LanguageCode))}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default Language;
