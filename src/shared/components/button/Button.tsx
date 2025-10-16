import type { ButtonType } from "@/shared/types/button.type";
import { Button as MantineButton } from "@mantine/core";

const Button = ({
  icon,
  rightIcon,
  label,
  children,
  variant = "light",
  size,
  onClick,
  radius,
  ...rest
}: ButtonType) => {
  return (
    <MantineButton
      leftSection={icon}
      rightSection={rightIcon}
      styles={{ root: { ":active": { transform: "none" } } }}
      variant={variant}
      size={size}
      radius={radius}
      onClick={onClick}
      {...rest}
    >
      {label ?? children}
    </MantineButton>
  );
};

export default Button;
