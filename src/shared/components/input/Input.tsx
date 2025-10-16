import { TextInput as MantineTextInput } from "@mantine/core"
import type { InputType } from "@/shared/types/input.type"

const TextInput = ({
    label,
    placeholder,
    icon,
    rightSection,
    radius,
    size,
    ...rest
  }: InputType) => {
    return (
      <MantineTextInput
        label={label}
        placeholder={placeholder}
        leftSection={icon}
        rightSection={rightSection}
        radius={radius}
        size={size}
        {...rest}
      />
    );
  };
  
  export default TextInput;
  