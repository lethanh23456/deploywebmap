import type { ReactNode } from "react";
import type { TextInputProps as MantineTextInputProps } from "@mantine/core";

type InputType = {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  rightSection?: ReactNode;
} & MantineTextInputProps;

export type { InputType };
