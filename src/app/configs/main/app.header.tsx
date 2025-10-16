import type { Header } from "@/core/models/header.model";

const appHeader: Header[] = [
  {
    id: "0",      
    title: "Home",
    to: "/",
  },
  {
    id: "1",
    title: "Upload",
    to: "/Upload",
  },
  {
    id: "2",
    title: "Campaign",
    to: "/Campaign",
  },
  {
    id: "3",
    title: "Stats",
    to: "/Stats",
  },
];


export default appHeader;