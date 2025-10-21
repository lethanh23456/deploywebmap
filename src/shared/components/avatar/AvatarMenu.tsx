import { Box, Menu, Text } from "@mantine/core";
import Avatar from "./Avatar";
import { useNavigate } from "@tanstack/react-router";
import { avatarMenuConfig } from "@/app/configs/global/avatar-menu.config";
import avatarImage from "@/assets/anh1.png";

const AvatarMenu = () => {
  const user = { name: "Yukihara" };
  const navigate = useNavigate();

  const handleMenuClick = (index: number) => {
    const item = avatarMenuConfig[index];
    if (!item.path) return;

 
    if (item.path === "/logout") {
      navigate({ to: "/login" });
    } else {
     
      navigate({ to: item.path });
    }
  };

  return (
    <Menu position="bottom-start" width={200}>
      <Menu.Target>
        <Box className="flex items-center gap-2 cursor-pointer">
          <Avatar image={avatarImage} />
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        {avatarMenuConfig.map((item, index) => {
          if (item.header) {
            return (
              <Menu.Label key={index}>
                <Text>{item.header}</Text>
              </Menu.Label>
            );
          }

          return (
            <Menu.Item
              key={index}
              leftSection={item.icon}
              onClick={() => handleMenuClick(index)}
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export { AvatarMenu };
