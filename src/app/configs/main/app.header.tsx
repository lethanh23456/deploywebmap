import type { Header } from "@/core/models/header.model";

const appHeader: Header[] = [
  {
    id: "0",      
    title: "Trang chủ",
    to: "/",
  },
  {
    id: "1",
    title: "Genres",
    to: "/genres",
  },
  {
    id: "2",
    title: "Categories",
    to: "/categories",
    children: [
      {
        id: "2.1",
        title: "Anime",
        to: "/anime",
        children: [
          { id: "2.1.1", title: "Anime 1", to: "/anime-1" },
        ],
      },
      { id: "2.2", title: "Action", to: "/action" },
      { id: "2.3", title: "Adventure", to: "/adventure" },
    ],
  },
  {
    id: "3",
    title: "Movies",
    to: "/movies",
  },
  {
    id: "4",
    title: "TV Shows",
    to: "/tv-shows",
  },
  {
    id: "5",
    title: "Countries",
    to: "/countries",
  },
  {
    id: "6",
    title: "Actors",
    to: "/actors",
  },
  {
    id: "7",
    title: "Releases Schedule",
    to: "/releases-schedule",
  },
];


export default appHeader;