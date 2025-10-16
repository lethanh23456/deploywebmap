export interface Header {
    id?: string;
    icon?: React.ReactNode;
    title?: string;
    badge?: string;
    to?: string;
    children?: Header[];
}