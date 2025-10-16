import { Box, Menu, Text } from "@mantine/core";
import Avatar from "./Avatar";
import { Link } from "@tanstack/react-router";
import { avatarMenuConfig } from "@/app/configs/global/avatar-menu.config";
import avatarImage from "@/assets/anh1.png"; 

const AvatarMenu = () => {
  const user = {
    name: "Yukihara",
  };

  return (
    <Menu position="bottom-start" width={200}>
      <Menu.Target>
        <Box className="flex items-center gap-2 cursor-pointer">
          <Avatar 
            image={avatarImage}
          />
          {/* <Box visibleFrom="xl">
            <Text>{user.name ?? "Yukihara"}</Text>
          </Box> */}
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
            <Menu.Item key={index} leftSection={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export { AvatarMenu };
