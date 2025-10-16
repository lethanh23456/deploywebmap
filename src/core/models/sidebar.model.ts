import type { Component } from "react";

export interface Sidebar {
    id: string;
    icon?: Component;
    title?: string;
    to?: string;
    children?: Sidebar[];
}
