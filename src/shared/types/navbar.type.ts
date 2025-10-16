type NavbarItem = {
    id?: string;
    label?: string;
    href?: string;
    icon?: React.ReactNode;
    children?: NavbarItem[];
    defaultOpened?: boolean;
}

export type { NavbarItem };