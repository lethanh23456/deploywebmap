import { Box, Menu, Text } from "@mantine/core";
import type { Header } from "@/core/models/header.model";
import { Link } from "@tanstack/react-router";

const HeaderNavigatorItem = (items: Header[]) =>
  items.map((item) =>
    item.children && item.children.length > 0 ? (
      <Menu.Sub key={item.id}>
        <Menu.Sub.Target>
          <Menu.Sub.Item>{item.title}</Menu.Sub.Item>
        </Menu.Sub.Target>
        <Menu.Sub.Dropdown>
          {HeaderNavigatorItem(item.children)}
        </Menu.Sub.Dropdown>
      </Menu.Sub>
    ) : (
      <Menu.Item key={item.id} component={Link} to={item.to || "#"}>
        <Text inherit>{item.title}</Text>
      </Menu.Item>
    )
  );

const HeaderNavigator = ({ items }: { items: Header[] }) => {
  return (
    <Box className="flex gap-2" visibleFrom="xl">
      {items.map((item) =>
        item.children && item.children.length > 0 ? (
          <Menu
            key={item.id}
            width={200}
            trigger="hover"
            openDelay={100}
            closeDelay={150}
            position="bottom-start"
          >
            <Menu.Target>
              <Link
                to={item.to || "#"}
                className="px-2 py-1 hover:text-[#1c7ed6]"
                activeProps={{
                  className: "text-[#1c7ed6]",
                }}
              >
                <Text inherit>{item.title}</Text>
              </Link>
            </Menu.Target>
            <Menu.Dropdown>{HeaderNavigatorItem(item.children)}</Menu.Dropdown>
          </Menu>
        ) : (
          <Link
            key={item.id}
            to={item.to || "#"}
            activeProps={{
              className: "text-[#1c7ed6]",
            }}
            className="px-2 py-1 hover:text-[#1c7ed6]"
          >
            <Text className="whitespace-nowrap" inherit>
              {item.title}
            </Text>
          </Link>
        )
      )}
    </Box>
  );
};

export default HeaderNavigator;
