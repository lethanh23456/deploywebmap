type AvatarType = {
  name?: string;
  image?: string;
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "xl" | "full";
};

type AvatarMenuType = {
  header?: string;
  label?: string;
  icon?: React.ReactNode;
  path?: string;
};

export type { AvatarType, AvatarMenuType };