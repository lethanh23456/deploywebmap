import type { AvatarMenuType } from "@/shared/types/avatar.type";
import {
  TbHistory,
  TbHelp,
  TbLogout,
  TbMessage,
  TbSettings,
  TbTransferIn,
  TbUser,
} from "react-icons/tb";

const avatarMenuConfig: AvatarMenuType[] = [
  {
    header: "General",
  },
  {
    label: "Profile",
    icon: <TbUser />,
    path: "/profile",
  },
  {
    label: "History",
    icon: <TbHistory />,
    path: "/history",
  },
  { header: "Support" },
  {
    label: "Help Center",
    icon: <TbHelp />,
    path: "/help-center",
  },
  {
    label: "Contact Us",
    icon: <TbMessage />,
    path: "/contact-us",
  },
  { header: "Tools" },
  {
    label: "Settings",
    icon: <TbSettings />,
    path: "/settings",
  },
  {
    label: "Transfer Data",
    icon: <TbTransferIn />,
    path: "/transfer-data",
  },
  {
    label: "Logout",
    icon: <TbLogout />,
    path: "/logout",
  },
];

export { avatarMenuConfig };
