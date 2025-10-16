import { Avatar as MantineAvatar } from "@mantine/core";
import type { AvatarType } from "@/shared/types/avatar.type";
import { getAvatarInitials } from "@/shared/utils";
import { forwardRef } from "react";

const Avatar = forwardRef<HTMLDivElement, AvatarType>(
  ({ image, size = "md", radius = "xl", name, ...others }, ref) => {
    const initials = getAvatarInitials(name);

    return (
      <MantineAvatar
        ref={ref}
        size={size}
        radius={radius}
        src={image}
        alt={name}
        {...others}
      >
        {!image && initials}
      </MantineAvatar>
    );
  }
);

export default Avatar;
