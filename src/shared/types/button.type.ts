import type { ReactNode } from "react";
import type { ButtonProps as MantineButtonProps } from "@mantine/core";

type ButtonType = {
  icon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
} & Omit<MantineButtonProps, "children" | "leftSection" | "rightSection">;

export type { ButtonType };
